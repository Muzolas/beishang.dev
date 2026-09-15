"use client"

import {
  Server,
  Database,
  LayoutGrid,
  Sparkles,
  Cpu,
  Terminal,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

// Explicit, semantically accurate icon mapping for each of the 6 CV categories
const categoryIcons = [
  Server,      // 0: Backend & API
  Database,    // 1: Veritabanı & Veri
  LayoutGrid,  // 2: Frontend & Mobil
  Sparkles,    // 3: Yapay Zeka Destekli Geliştirme (AI Dev)
  Cpu,         // 4: Mimari & Sistem (Paralel / Dağıtık Sistemler)
  Terminal,    // 5: Araçlar & DevOps
]

export function Skills() {
  const { lang, data } = useLanguage()

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Ambient background blob */}
      <div
        aria-hidden
        className="blob-big top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      <SectionHeading
        index="04"
        title={
          <>
            {lang === "tr" ? "Teknik " : "Technical "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Yetenekler" : "Skills"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Kurumsal backend mimarisi, ilişkisel veritabanı modellemesi, modern web/mobil istemcileri ve yapay zeka destekli geliştirme ekosistemi."
            : "Enterprise backend engines, relational database modeling, modern frontends, and AI-augmented developer workflows."
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.skills.map((group, i) => {
          const Icon = categoryIcons[i % categoryIcons.length]
          const isAiGroup = i === 3

          return (
            <div
              key={group.title}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(52,211,153,0.12)] ${
                isAiGroup
                  ? "border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 to-card/60 shadow-[0_0_25px_rgba(52,211,153,0.1)]"
                  : "border-white/[0.08] hover:border-emerald-500/40"
              }`}
            >
              <div>
                {/* Header with Icon and index */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:scale-110 ${
                      isAiGroup
                        ? "bg-emerald-500/20 text-emerald-300 ring-emerald-400/50 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                        : "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-300">
                    {group.title}
                  </h3>
                  <span className="mt-1 font-mono text-[11px] text-emerald-400/80">
                    {group.category}
                  </span>
                </div>
              </div>

              {/* Skill chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-xl border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                      isAiGroup
                        ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400 hover:text-emerald-100"
                        : "border-white/[0.07] bg-secondary/40 text-muted-foreground hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-300"
                    }`}
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
