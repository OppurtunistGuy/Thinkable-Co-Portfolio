"use client";

import { useState } from "react";
import { services, type ServiceKey } from "@/config/site";
import { frameRatio, work } from "@/content/work";

type Filter = "all" | ServiceKey;

const labels: Record<ServiceKey, string> = Object.fromEntries(services.map((s) => [s.key, s.label])) as Record<ServiceKey, string>;

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = work.filter((w) => filter === "all" || w.service === filter);
  const options: { key: Filter; label: string }[] = [{ key: "all", label: "All" }, ...services.map((s) => ({ key: s.key, label: s.label }))];

  return (
    <>
      <div role="group" aria-label="Filter by service" className="mx-auto flex max-w-[1200px] flex-wrap gap-2.5 px-6 pb-6">
        {options.map((o) => {
          const on = o.key === filter;
          return (
            <button
              key={o.key}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(o.key)}
              className={`min-h-11 rounded-full border-2 px-[18px] text-[15px] font-bold ${
                on ? "border-accent bg-accent text-on-accent" : "border-line bg-card text-text hover:border-text"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "project" : "projects"}
      </p>
      <ul className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-7 px-6 pb-16 pt-4">
        {items.map((w, i) => (
          <li key={`${w.service}-${i}`}>
            <article className="flex flex-col gap-2.5">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[18px] border border-line bg-card p-5">
                <div
                  className="flex h-full max-w-full items-center justify-center rounded-[10px] border border-dashed border-line p-2 text-center text-[13px] text-muted"
                  style={{ aspectRatio: frameRatio[w.service] }}
                >
                  {w.frame}
                </div>
              </div>
              <p className="flex items-center gap-2 text-[13px] font-bold text-label">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                {labels[w.service]}
              </p>
              <h2 className="text-[19px] font-bold">{w.name}</h2>
              <p className="text-[15px] leading-normal text-muted">
                {w.client}. {w.result}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
