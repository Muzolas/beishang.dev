import { GraduationCap, BadgeCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { education, reference } from "@/lib/site-data"

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading index="04" title="Education & Reference" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card/50 p-6">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">{education.school}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground">
              {education.detail}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{education.period}</span>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card/50 p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30">
            <BadgeCheck className="h-4 w-4" />
            Verified Reference
          </div>
          <h3 className="text-lg font-semibold">{reference.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{reference.role}</p>
          <p className="mt-0.5 text-sm text-indigo-300">{reference.company}</p>
        </div>
      </div>
    </section>
  )
}
