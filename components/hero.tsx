import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/site-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* glow backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start px-4 pb-20 pt-36 sm:px-6 md:pt-44">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </div>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-emerald-400">const</span> role ={" "}
          <span className="text-indigo-300">
            &quot;{profile.title} | {profile.role}&quot;
          </span>
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-emerald-400" />
          {profile.location}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-indigo-500/50 hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download CV (PDF)
          </a>
        </div>

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
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-300"
    >
      {children}
    </a>
  )
}
