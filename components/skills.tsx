import { Code2, Database, Layout, Sparkles, Server } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/site-data"

const icons = [Server, Database, Layout, Sparkles, Code2]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Ambient background blob */}
      <div
        aria-hidden
        className="blob-big top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
      />



      <SectionHeading
        index="01"
        title={
          <>
            My <span className="text-emerald-400">Skills</span>
          </>
        }
        subtitle="Core competencies, frameworks, and architecture paradigms I leverage to build resilient systems."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)]"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
                </div>

                <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-300">
                  {group.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 group-hover:border-emerald-500/20 group-hover:text-foreground hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

