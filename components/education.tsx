import { GraduationCap, BadgeCheck, Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { education, reference } from "@/lib/site-data"

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        index="04"
        title={
          <>
            Academic & <span className="text-emerald-400">References</span>
          </>
        }
        subtitle="Formal academic credentials and verified professional recommendations."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Education Card */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(52,211,153,0.1)]">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                {education.period}
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              {education.school}
            </h3>
            <p className="mt-2 text-base font-medium text-emerald-300">
              {education.degree}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Focused on core computer science fundamentals, object-oriented software engineering,
              database management systems, parallel programming, and modern distributed web architectures.
            </p>
          </div>

          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <span className="inline-flex items-center rounded-lg border border-white/[0.08] bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground">
              {education.detail}
            </span>
          </div>
        </div>

        {/* Bianca "What They Say" Testimonial Card */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(52,211,153,0.1)]">
          <div>
            <div className="mb-6 flex items-center justify-between">
              {/* Bianca 5.0 Star Rating */}
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-extrabold text-emerald-400">5.0</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                <BadgeCheck className="h-3.5 w-3.5" />
                Verified Reference
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="relative">
              <Quote className="absolute -left-2 -top-2 h-8 w-8 text-emerald-500/15" />
              <p className="relative pl-6 text-sm italic leading-relaxed text-muted-foreground/90 sm:text-base">
                &ldquo;A disciplined and solution-driven engineer who consistently delivered reliable,
                high-quality code throughout his contributions. Proactive, reliable with deadlines,
                and exceptionally skilled in system design and backend architecture.&rdquo;
              </p>
            </div>
          </div>

          {/* Reference Author */}
          <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 font-heading text-base font-bold text-emerald-300 ring-2 ring-emerald-500/40">
              {reference.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-foreground">
                {reference.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {reference.role} • <span className="text-emerald-400">{reference.company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

