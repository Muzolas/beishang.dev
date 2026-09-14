"use client"

import { useEffect, useState } from "react"
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react"
import { navLinks, profile } from "@/lib/site-data"

export function Navbar() {
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
          ? "border-b border-white/[0.08] bg-background/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-foreground transition-transform hover:scale-105"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-all group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
            <Terminal className="h-4.5 w-4.5" />
          </span>
          <span>
            {profile.alias}
            <span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
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

        {/* Bianca styled CTA button */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-950 shadow-[0_0_20px_rgba(52,211,153,0.25)] transition-all duration-300 hover:bg-emerald-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.45)] active:scale-95"
          >
            Contact me
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-card/60 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5 text-emerald-400" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-b border-white/[0.08] bg-background/95 backdrop-blur-2xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
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
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-950 shadow-md shadow-emerald-500/20"
              >
                Contact me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

