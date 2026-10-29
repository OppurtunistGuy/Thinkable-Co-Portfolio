"use client";

import { useEffect, useRef, useState } from "react";

/** Wide videos fit the frame's width; tall ones fit its height. */
function isWide(ratio: string): boolean {
  const [w, h] = ratio.split("/").map((n) => parseFloat(n));
  return w / h > 4 / 3;
}

type Props = {
  src: string;
  poster: string;
  label: string;
  /** CSS aspect-ratio of the video itself, e.g. "9 / 16". */
  ratio: string;
};

/**
 * Muted, looping work video. It only loads and plays while on screen, so pages
 * stay fast. A pause button is always there, and it never autoplays for people
 * who turned on reduced motion.
 */
export function WorkVideo({ src, poster, label, ratio }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused]);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      setUserPaused(true);
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[10px] bg-black ${isWide(ratio) ? "w-full" : "h-full max-w-full"}`}
      style={{ aspectRatio: ratio }}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        className="absolute bottom-2 right-2 inline-flex size-11 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm hover:bg-black/80"
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>
        )}
      </button>
    </div>
  );
}
