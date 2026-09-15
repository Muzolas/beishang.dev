"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { Language, siteData } from "./site-data"

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  data: typeof siteData.tr
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr")

  useEffect(() => {
    const saved = localStorage.getItem("preferred-lang") as Language | null
    if (saved === "tr" || saved === "en") {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("preferred-lang", newLang)
  }

  const data = siteData[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Fallback to Turkish if context is not mounted
    return {
      lang: "tr" as Language,
      setLang: () => {},
      data: siteData.tr,
    }
  }
  return context
}
