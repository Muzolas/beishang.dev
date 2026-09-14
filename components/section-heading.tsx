import React from "react"

export function SectionHeading({
  index,
  title,
  subtitle,
  centered = false,
}: {
  index?: string
  title: React.ReactNode
  subtitle?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto" : ""}`}>
      {index && (
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            // {index}
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-emerald-500/60 to-transparent" />
        </div>
      )}
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

