"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 350) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisible, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/40 bg-background/85 text-emerald-400 backdrop-blur-md shadow-lg shadow-emerald-500/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/10 hover:shadow-emerald-500/30 hover:text-emerald-300 active:scale-95"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
