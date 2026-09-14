export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-emerald-400">{index}</span>
        <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-emerald-500/50 to-transparent" />
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
