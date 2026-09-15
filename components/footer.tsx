"use client"

import { ArrowUpRight, Download, Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { lang, data } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-transparent">
      {/* Footer ambient glow */}
      <div
        aria-hidden
        className="blob-big -bottom-32 left-1/2 -translate-x-1/2 opacity-60"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Large Typographic Banner */}
        <div className="mb-14 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-center sm:p-14">
          <h2 className="mx-auto max-w-3xl font-heading text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {lang === "tr" ? (
              <>
                BEISHANG İLE ÇALIŞIN VE{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  GÜVENİLİR &amp; ÖLÇEKLENEBİLİR MİMARİLERİ
                </span>{" "}
                HAYATA GEÇİRİN.
              </>
            ) : (
              <>
                COLLABORATE WITH BEISHANG &amp; BRING{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  HIGH-PERFORMANCE ARCHITECTURES
                </span>{" "}
                TO LIFE.
              </>
            )}
          </h2>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-950 shadow-[0_0_25px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] active:scale-95"
            >
              <span>{lang === "tr" ? "Birlikte Geliştirelim" : "Let's Build Together"}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={data.profile.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105"
            >
              <Download className="h-4 w-4 text-emerald-400" />
              <span>{lang === "tr" ? "CV Görüntüle / İndir" : "View / Download CV"}</span>
            </a>
          </div>
        </div>

        {/* Navigation links & Socials */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/[0.06] pb-8 sm:flex-row">
          <ul className="flex flex-wrap items-center gap-6">
            {data.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <SocialButton href={data.profile.github} label="GitHub">
              <GithubIcon className="h-4.5 w-4.5" />
            </SocialButton>
            <SocialButton href={data.profile.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-4.5 w-4.5" />
            </SocialButton>
            <SocialButton href={`mailto:${data.profile.email}`} label="Email">
              <Mail className="h-4.5 w-4.5" />
            </SocialButton>
            <SocialButton href={`tel:${data.profile.phoneRaw}`} label="Phone">
              <Phone className="h-4.5 w-4.5" />
            </SocialButton>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p className="font-mono">
            <span className="text-emerald-400">{data.profile.alias}</span>
            <span className="text-foreground">.dev</span> — © {new Date().getFullYear()}{" "}
            {data.profile.name}
          </p>
          <p className="font-mono">
            C# / .NET Core • PostgreSQL • Distributed Systems
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({
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
      target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-card/60 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(52,211,153,0.25)]"
    >
      {children}
    </a>
  )
}
