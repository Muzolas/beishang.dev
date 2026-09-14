import { Code2, Database, Layout, Sparkles, Server } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/site-data"

const icons = [Server, Database, Layout, Sparkles, Code2]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="01"
        title="Core Tech Stack"
        subtitle="The tools and technologies I use to design and ship reliable software."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          const isEmerald = group.accent === "emerald"
          return (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-border/80"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${
                  isEmerald
                    ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30"
                    : "bg-indigo-500/10 text-indigo-400 ring-indigo-500/30"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
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
