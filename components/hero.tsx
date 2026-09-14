import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/site-data"

export function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] pt-28 sm:pt-36 lg:pt-40">
      {/* Bianca signature ambient glowing blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="blob-big -top-20 -right-20 opacity-80" />
        <div className="blob-small top-[40%] -left-16 opacity-75" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-20 sm:px-6">

        {/* Available for opportunities badge */}
        <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-300 backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Hi! I&apos;m {profile.name.split(" ")[0]} — Based in Turkey</span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Software Engineer & <br />
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.35)]">
                Backend Architect
              </span>
            </h1>

            <p className="mt-5 font-mono text-sm text-muted-foreground sm:text-base">
              <span className="text-emerald-400">const</span> specialty ={" "}
              <span className="text-emerald-200/90">&quot;C# / .NET Core • PostgreSQL • Distributed Systems&quot;</span>
            </p>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground/80">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>{profile.location}</span>
            </div>

            {/* Bianca pill action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold tracking-wide text-emerald-950 shadow-[0_0_25px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] active:scale-95"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/CV - Software Engineer _ Muzaffer Beysan Kalem.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105"
              >
                <Download className="h-4 w-4 text-emerald-400" />
                Download CV
              </a>
            </div>

            {/* Social Links with hover glow */}
            <div className="mt-8 flex items-center gap-3">
              <SocialLink href={profile.github} label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Bianca signature Circular Spinning Badge ("EXPLORE • MORE • LET'S • BUILD •") */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-card/40 backdrop-blur-xl shadow-2xl shadow-black/40">
              {/* Rotating Circular Text SVG */}
              <svg
                className="h-full w-full animate-spin-slow p-2"
                viewBox="0 0 200 200"
              >
                <path
                  id="circlePath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  fill="none"
                />
                <text className="fill-emerald-300 font-mono text-[11px] font-bold tracking-[0.26em] uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    EXPLORE • MORE • LET&apos;S • BUILD •
                  </textPath>
                </text>
              </svg>

              {/* Center icon in circle */}
              <a
                href="#skills"
                aria-label="Scroll to skills"
                className="group absolute flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <ArrowRight className="h-6 w-6 rotate-90 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-card/60 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.25)]"
    >
      {children}
    </a>
  )
}

