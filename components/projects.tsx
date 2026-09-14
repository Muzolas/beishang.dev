import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/site-data"

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="blob-big -bottom-10 right-[-5%] opacity-75"
      />


      <SectionHeading
        index="02"
        title={
          <>
            View My <span className="text-emerald-400">Work</span>
          </>
        }
        subtitle="Highlighted architectures spanning production backend systems, desktop solutions, and high-performance computing."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_20px_40px_rgba(52,211,153,0.15)]"
          >
            <div>
              {/* Project Card Header / Preview simulation */}
              <div className="relative mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-emerald-950/40 via-secondary/50 to-background/80 p-4">
                <div className="flex flex-col items-center gap-2 text-center">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground/80">
                    {project.tech.slice(0, 3).join(" • ")}
                  </span>
                </div>

                {/* Bianca circular floating arrow-up-right button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-110 hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] active:scale-95"
                >
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Status tag */}
                {project.status && (
                  <div className="absolute left-3 top-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                        project.status === "In Progress"
                          ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40"
                          : "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/40"
                      }`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Number and title */}
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-heading text-2xl font-extrabold text-emerald-400">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-emerald-300">
                  {project.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Tech tag pill badges */}
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/[0.06] bg-secondary/30 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-emerald-500/20 group-hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

