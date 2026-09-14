"use client"

import { useEffect, useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { navLinks, profile } from "@/lib/site-data"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-colors group-hover:bg-emerald-500/20">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="text-foreground">{profile.alias}</span>
          <span className="text-emerald-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          className="hidden rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20 md:inline-block"
        >
          Download CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2.5 text-center text-sm font-medium text-emerald-300"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
