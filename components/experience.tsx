"use client"

import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

export function Experience() {
  const { lang, data } = useLanguage()

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Background ambient glow */}
      <div aria-hidden className="blob-small -top-10 left-[-5%] opacity-60" />

      <SectionHeading
        index="03"
        title={
          <>
            {lang === "tr" ? "İş " : "Work "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Deneyimi" : "Experience"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Kurumsal e-dönüşüm servisleri, modern backend mimarileri ve bağımsız yazılım projelerinde üstlendiğim roller."
            : "Production roles engineering enterprise e-transformation services, robust backend pipelines, and client solutions."
        }
      />

      <div className="relative border-l border-emerald-500/30 pl-6 sm:pl-10">
        {data.experience.map((item, i) => (
          <div key={`${item.company}-${i}`} className="relative pb-16 last:pb-2">
            {/* Glowing timeline node */}
            <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-400 bg-background shadow-[0_0_15px_rgba(52,211,153,0.6)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>

            {/* Experience Card */}
            <div className="group rounded-3xl border border-white/[0.08] bg-card/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(52,211,153,0.12)]">
              {/* Header: Role & Period */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="flex items-center gap-2.5 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-emerald-300">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                      <Briefcase className="h-4.5 w-4.5" />
                    </span>
                    <span>{item.role}</span>
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 pl-11 text-xs text-muted-foreground sm:text-sm">
                    <span className="font-semibold text-emerald-400">{item.company}</span>
                    <span>•</span>
                    <span className="rounded-full bg-secondary/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground border border-white/[0.06]">
                      {item.type}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-muted-foreground/80">
                      <MapPin className="h-3 w-3 text-emerald-400/80" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used in this role */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
                <span className="font-mono text-xs font-semibold text-muted-foreground/80 mr-1">
                  Stack:
                </span>
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/[0.06] bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors group-hover:border-emerald-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
