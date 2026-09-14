import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/site-data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="03" title="Experience" subtitle="Where I've built and shipped software." />

      <ol className="relative border-l border-border/70 pl-8">
        {experience.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500/40 bg-background">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <div className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-border/80">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <Briefcase className="h-4 w-4 text-emerald-400" />
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-1 pl-6 text-sm text-indigo-300">{item.company}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
