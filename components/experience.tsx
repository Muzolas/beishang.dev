import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/site-data"

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="03"
        title={
          <>
            Work <span className="text-emerald-400">Experience</span>
          </>
        }
        subtitle="Professional roles where I have developed, scaled, and shipped production code."
      />

      <ol className="relative border-l border-emerald-500/30 pl-8">
        {experience.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative pb-12 last:pb-0">
            {/* Glowing timeline node */}
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 bg-background shadow-[0_0_10px_rgba(52,211,153,0.5)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <div className="group rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="flex items-center gap-2.5 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-emerald-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  {item.role}
                </h3>
                <span className="rounded-full bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground border border-white/[0.06]">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 pl-10 text-sm font-semibold text-emerald-400/90">{item.company}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

