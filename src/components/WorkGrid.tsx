"use client";

import { useState } from "react";
import { services, type ServiceKey } from "@/config/site";
import { work } from "@/content/work";
import { WorkCard } from "./WorkCard";

type Filter = "all" | ServiceKey;

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = work.filter((w) => filter === "all" || w.service === filter);
  // Only offer filters for services that have real work to show.
  const options: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    ...services.filter((s) => work.some((w) => w.service === s.key)).map((s) => ({ key: s.key, label: s.label })),
  ];

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
      <ul className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-8 px-6 pb-16 pt-4">
        {items.map((w) => (
          <li key={w.slug}>
            <WorkCard item={w} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </>
  );
}
