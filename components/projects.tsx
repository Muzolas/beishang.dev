"use client"

import { ArrowUpRight, FolderGit2, Sparkles, CheckCircle2, Terminal, Cpu } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

export function Projects() {
  const { lang, data } = useLanguage()

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Background ambient glow */}
      <div aria-hidden className="blob-big -bottom-10 right-[-5%] opacity-70" />

      <SectionHeading
        index="02"
        title={
          <>
            {lang === "tr" ? "Öne Çıkan " : "Featured "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Projeler" : "Projects"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Kurumsal backend mimarileri, local-first masaüstü çözümleri ve yüksek performanslı paralel bilgi işlem çalışmaları."
            : "Production enterprise backend platforms, local-first desktop software, and high-performance distributed systems."
        }
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {data.projects.map((project, i) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-card/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_20px_45px_rgba(52,211,153,0.18)]"
          >
            <div>
              {/* Project Card Header simulation */}
              <div className="relative mb-6 flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-emerald-950/50 via-secondary/40 to-background/90 p-4">
                {/* Top bar with status & external link */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold backdrop-blur-md ${
                      project.statusVariant === "in-progress"
                        ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40"
                        : project.statusVariant === "completed"
                        ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40"
                        : "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/40"
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    {project.status}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} on GitHub`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.6)] active:scale-95"
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Center Badge / Category */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
                    {project.id === "paralel-dagitik" ? (
                      <Cpu className="h-5 w-5" />
                    ) : (
                      <FolderGit2 className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold">
                      {project.badge}
                    </span>
                    <p className="font-mono text-[10px] text-muted-foreground/80">
                      {project.period}
                    </p>
                  </div>
                </div>

                {/* Architecture highlight bar */}
                <div className="rounded-lg border border-emerald-500/20 bg-background/80 px-2.5 py-1 backdrop-blur-md">
                  <span className="line-clamp-1 font-mono text-[10px] text-emerald-300">
                    ⚡ {project.architectureHighlight}
                  </span>
                </div>
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
                {project.shortDesc}
              </p>

              {/* Detailed Bullet Points from CV */}
              <ul className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tag pill badges */}
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/[0.06] bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-emerald-500/20 group-hover:text-foreground"
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
