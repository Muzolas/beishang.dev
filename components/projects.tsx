import { FolderGit2 } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/site-data"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="02"
        title="Featured Projects"
        subtitle="A selection of work spanning backend systems, desktop apps, and academic research."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/70 text-emerald-400 ring-1 ring-border">
                <FolderGit2 className="h-5 w-5" />
              </span>
              <div className="flex items-center gap-2">
                {project.status && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      project.status === "In Progress"
                        ? "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30"
                        : "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h3 className="text-balance text-lg font-semibold leading-snug">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
