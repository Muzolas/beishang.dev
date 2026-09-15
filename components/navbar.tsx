"use client"

import { useEffect, useState } from "react"
import { Menu, X, Terminal, ArrowUpRight, Globe, Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const { lang, setLang, data } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-background/85 backdrop-blur-2xl shadow-xl shadow-black/30"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-all group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            <Terminal className="h-4.5 w-4.5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            beishang<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {data.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Language Switcher + Download CV / Contact) */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language Toggle Pill */}
          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-emerald-500/40 hover:text-foreground"
            title={lang === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
          >
            <Globe className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:rotate-45" />
            <span className={lang === "tr" ? "font-bold text-emerald-300" : ""}>TR</span>
            <span className="text-muted-foreground/40">/</span>
            <span className={lang === "en" ? "font-bold text-emerald-300" : ""}>EN</span>
          </button>

          <a
            href={data.profile.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.25)]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-950 shadow-[0_0_20px_rgba(52,211,153,0.25)] transition-all duration-300 hover:bg-emerald-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.45)] active:scale-95"
          >
            <span>{lang === "tr" ? "İletişim" : "Contact"}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="flex items-center gap-1 rounded-full border border-white/10 bg-card/70 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
          >
            <Globe className="h-3 w-3 text-emerald-400" />
            <span className="font-bold text-emerald-300">{lang.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-card/60 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5 text-emerald-400" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-b border-white/[0.08] bg-background/98 backdrop-blur-2xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {data.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  {link.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                </a>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-2 pt-3">
              <a
                href={data.profile.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300"
              >
                <Download className="h-3.5 w-3.5" />
                <span>{lang === "tr" ? "CV İndir" : "Download CV"}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-bold text-emerald-950"
              >
                <span>{lang === "tr" ? "İletişime Geç" : "Get In Touch"}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
