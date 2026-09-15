"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Check,
  Copy,
  Sparkles,
  Layers,
  Database,
  Code2,
  GraduationCap,
  Award,
  Server,
  ArrowUpRight,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { lang, data } = useLanguage()
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2200)
  }

  const statIcons = [Code2, GraduationCap, Award, Server]

  return (
    <section id="top" className="relative min-h-[90vh] pt-28 pb-16 sm:pt-36 lg:pt-40">
      {/* Signature ambient glowing background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="blob-big -top-24 -right-24 opacity-70" />
        <div className="blob-small top-[45%] -left-20 opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Availability & Origin Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-300 backdrop-blur-md shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-semibold">{data.profile.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card/50 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>{data.profile.location}</span>
          </div>


        </div>

        {/* Main Hero Grid: Left Content, Right Real Avatar & Interactive Architecture Card */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-sm text-emerald-400 sm:text-base">
              <span className="text-muted-foreground/60">//</span>
              <span>{data.profile.title}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-emerald-300/90 font-semibold">Backend &amp; Distributed Systems</span>
            </div>

            {/* Name with Beysan strongly emphasized */}
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-6xl">
              Muzaffer{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.35)]">
                Beysan
              </span>{" "}
              Kalem
            </h1>

            <p className="mt-3 font-heading text-base font-semibold text-muted-foreground sm:text-xl">
              Software Engineer • <span className="text-emerald-300 font-bold">Backend &amp; System Architect</span>
            </p>

            <div className="mt-4 inline-block rounded-xl border border-white/10 bg-card/60 px-4 py-2 font-mono text-xs sm:text-sm text-muted-foreground backdrop-blur-md">
              <span className="text-emerald-400">const</span> specialty = [
              <span className="text-emerald-200/90">&quot;C# / .NET Core&quot;</span>,{" "}
              <span className="text-emerald-200/90">&quot;PostgreSQL&quot;</span>,{" "}
              <span className="text-emerald-200/90">&quot;RabbitMQ&quot;</span>,{" "}
              <span className="text-emerald-200/90">&quot;Go&quot;</span>];
            </div>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.profile.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold tracking-wide text-emerald-950 shadow-[0_0_25px_rgba(52,211,153,0.35)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.55)] active:scale-95"
              >
                {lang === "tr" ? "Projeleri İncele" : "Explore Work"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={data.profile.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:bg-emerald-500/15 hover:text-emerald-300"
              >
                <Download className="h-4 w-4 text-emerald-400" />
                {lang === "tr" ? "CV İndir (PDF)" : "Download CV (PDF)"}
              </a>
            </div>

            {/* Quick Contact & Copy Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Quick Copy Email */}
              <button
                type="button"
                onClick={() => copyToClipboard(data.profile.email, "email")}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-card/60 px-3.5 py-2 text-xs font-mono text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/40 hover:text-foreground"
                title="E-postayı kopyala"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <span>{data.profile.email}</span>
                {copiedType === "email" ? (
                  <span className="flex items-center gap-1 font-bold text-emerald-300">
                    <Check className="h-3 w-3" />
                    {lang === "tr" ? "Kopyalandı" : "Copied"}
                  </span>
                ) : (
                  <Copy className="h-3 w-3 text-muted-foreground/60 transition-transform group-hover:scale-110" />
                )}
              </button>

              {/* Quick Copy Phone */}
              <button
                type="button"
                onClick={() => copyToClipboard(data.profile.phone, "phone")}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-card/60 px-3.5 py-2 text-xs font-mono text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/40 hover:text-foreground"
                title="Telefonu kopyala"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>{data.profile.phone}</span>
                {copiedType === "phone" ? (
                  <span className="flex items-center gap-1 font-bold text-emerald-300">
                    <Check className="h-3 w-3" />
                    {lang === "tr" ? "Kopyalandı" : "Copied"}
                  </span>
                ) : (
                  <Copy className="h-3 w-3 text-muted-foreground/60 transition-transform group-hover:scale-110" />
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={data.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-card/60 text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={data.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-card/60 text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Real Photo with Cyber Frame + Architecture Spotlight Card */}
          <div className="flex flex-col items-center justify-center gap-6 lg:col-span-5">
            {/* Interactive Avatar Container */}
            <div className="group relative">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-40 blur-xl transition-all duration-700 group-hover:opacity-75 group-hover:blur-2xl" />

              {/* Avatar Frame */}
              <div className="relative flex h-56 w-56 sm:h-64 sm:w-64 items-center justify-center rounded-full border-2 border-emerald-400/40 bg-card/80 p-2 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={data.profile.avatar}
                    alt={data.profile.name}
                    fill
                    sizes="(max-width: 768px) 224px, 256px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Floating Badge on Avatar: Verified Engineer */}
                <div className="absolute -bottom-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-background/90 px-4 py-1 font-mono text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur-md">

                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            {/* Architecture Card: Controller → Service → Repository → DbContext */}
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-card/70 p-4 backdrop-blur-xl shadow-xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Enterprise Flow</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground/70">C# / .NET Core</span>
              </div>

              <div className="mt-3 flex flex-col gap-1.5 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-secondary/30 px-3 py-1.5 text-muted-foreground">
                  <span className="text-foreground">Controller Layer</span>
                  <span className="text-[11px] text-emerald-400">REST / JWT</span>
                </div>
                <div className="flex items-center justify-center text-emerald-500/60">↓</div>
                <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-secondary/30 px-3 py-1.5 text-muted-foreground">
                  <span className="text-foreground">Service &amp; Business</span>
                  <span className="text-[11px] text-teal-400">Clean Logic</span>
                </div>
                <div className="flex items-center justify-center text-emerald-500/60">↓</div>
                <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-emerald-300">
                  <span className="font-semibold">Repository &amp; RabbitMQ</span>
                  <span className="text-[11px]">Async Queue</span>
                </div>
                <div className="flex items-center justify-center text-emerald-500/60">↓</div>
                <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-secondary/30 px-3 py-1.5 text-muted-foreground">
                  <span className="text-foreground flex items-center gap-1.5">
                    <Database className="h-3 w-3 text-emerald-400" />
                    PostgreSQL / DbContext
                  </span>
                  <span className="text-[11px] text-emerald-400">ACID</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Stats Bento Grid - Clean semantic icons and whitespace-nowrap */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {data.heroStats.map((stat, i) => {
            const StatIcon = statIcons[i % statIcons.length]
            return (
              <div
                key={stat.label}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                    <StatIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">0{i + 1}</span>
                </div>

                <div className="mt-3">
                  <div className="font-heading text-base sm:text-lg lg:text-xl font-bold tracking-tight text-emerald-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-heading text-xs sm:text-sm font-bold text-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-muted-foreground line-clamp-1">
                    {stat.hint}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
