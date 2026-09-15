"use client"

import {
  Server,
  Code2,
  Database,
  Layers,
  Sparkles,
  Network,
  Target,
  Terminal,
  Zap,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

// Semantic icons for the 6 core strengths
const strengthIcons = [
  Server,    // Backend
  Code2,     // C# / .NET
  Database,  // PostgreSQL
  Layers,    // Sistem Tasarımı
  Sparkles,  // AI Dev
  Network,   // Dağıtık Sistemler
]

export function AboutOverview() {
  const { lang, data } = useLanguage()

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="01"
        title={
          <>
            {lang === "tr" ? "Özet & " : "Profile & "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Mühendislik Yaklaşımı" : "Engineering Mindset"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Kurumsal backend mimarisi, güvenli API tasarımı ve yapay zeka destekli modern mühendislik vizyonu."
            : "Enterprise backend architecture, secure API systems, and AI-accelerated modern software engineering."
        }
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Summary & Philosophy Bento Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-card/60 p-7 sm:p-9 backdrop-blur-xl shadow-xl shadow-black/20 lg:col-span-7">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Terminal className="h-4 w-4" />
                <span>{lang === "tr" ? "Mühendislik Özeti" : "Engineering Summary"}</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                Muzaffer <span className="font-bold text-emerald-300">Beysan</span> Kalem
              </span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {lang === "tr"
                ? "Kurumsal Sistemler & Sürdürülebilir Mimari"
                : "Enterprise Architectures & Sustainable Code"}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.profile.summary}
            </p>
          </div>

          {/* AI-Assisted Highlight Tag */}
          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>{lang === "tr" ? "Yapay Zeka Destekli Geliştirme" : "AI-Assisted Workflow"}</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-emerald-200/80">
              {lang === "tr"
                ? "Cursor, GitHub Copilot, Claude ve Gemini araçlarıyla araştırma, test senaryoları ve kod kalitesini optimize edilmiş hızla yönetiyorum."
                : "Harnessing Cursor, GitHub Copilot, Claude, and Gemini to accelerate testing, code generation, refactoring, and technical research."}
            </p>
          </div>
        </div>

        {/* Right: Core Strengths Grid */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="flex items-center justify-between px-1">
            <h4 className="font-heading text-lg font-bold text-foreground">
              {lang === "tr" ? "Temel Yetkinlikler (Core Strengths)" : "Core Strengths"}
            </h4>
            <span className="font-mono text-xs text-emerald-400">6 Domains</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {data.coreStrengths.map((item, idx) => {
              const Icon = strengthIcons[idx % strengthIcons.length]
              return (
                <div
                  key={item.name}
                  className="group flex items-start gap-3.5 rounded-2xl border border-white/[0.08] bg-card/60 p-4 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-card/80 hover:shadow-[0_10px_20px_rgba(52,211,153,0.1)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-sm font-bold text-foreground transition-colors group-hover:text-emerald-300">
                      {item.name}
                    </h5>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Goals & Approach Cards */}
      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-emerald-400" />
          <h4 className="font-heading text-xl font-bold text-foreground">
            {data.goalsAndApproach.title}
          </h4>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.goalsAndApproach.items.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(52,211,153,0.12)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400 ring-1 ring-emerald-500/30">
                  0{i + 1}
                </span>
                <Zap className="h-4 w-4 text-emerald-500/40 transition-colors group-hover:text-emerald-400" />
              </div>
              <h5 className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-emerald-300">
                {item.title}
              </h5>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
