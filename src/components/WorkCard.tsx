import type { WorkItem } from "@/content/work";
import { WorkVideo } from "./WorkVideo";

/** One project: the work in its real shape inside a neutral frame, then the details. */
export function WorkCard({ item, headingLevel = "h3" }: { item: WorkItem; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="flex flex-col gap-2.5">
      <div className="flex aspect-[4/3] items-center justify-center rounded-[18px] border border-line bg-card p-4">
        <WorkVideo src={item.video} poster={item.poster} ratio={item.ratio} label={`${item.name}, ${item.kind}`} />
      </div>
      <p className="flex items-center gap-2 text-[13px] font-bold text-label">
        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        {item.kind}
      </p>
      <H className="text-[19px] font-bold">{item.name}</H>
      <p className="text-[15px] leading-normal text-muted">
        {item.client}. {item.summary}
      </p>
    </article>
  );
}
