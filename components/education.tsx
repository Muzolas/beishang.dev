"use client"

import {
  GraduationCap,
  Star,
  Quote,
  Languages,
  Award,
  ShieldCheck,
  Mail,
  Phone,
  School,
  Car,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

export function Education() {
  const { lang, data } = useLanguage()

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Ambient background glow */}
      <div aria-hidden className="blob-small -bottom-10 -right-10 opacity-50" />

      <SectionHeading
        index="05"
        title={
          <>
            {lang === "tr" ? "Eğitim, Referans & " : "Education & "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Yeterlilikler" : "Credentials"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Akademik temel, üst düzey kurumsal yönetici referansı, yabancı dil ve operasyonel yetkinlikler."
            : "Academic foundation, executive leadership recommendation, language proficiency, and operational readiness."
        }
      />

      <div className="flex flex-col gap-10">
        {/* ============================================================ */}
        {/* LAYER 1: Executive Endorsement / Referans (Standout Luxury Card) */}
        {/* ============================================================ */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/35 bg-gradient-to-br from-card/90 via-card/70 to-emerald-950/25 p-7 sm:p-10 backdrop-blur-2xl shadow-2xl shadow-emerald-950/40">
          {/* Top glow beam */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

          <div className="flex flex-col gap-6">
            {/* Header: Rating & Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-2xl font-extrabold text-emerald-400">5.0</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="h-4 w-px bg-white/10" />
                <span className="font-mono text-xs text-muted-foreground">
                  {lang === "tr" ? "Kurumsal Değerlendirme" : "Corporate Evaluation"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-emerald-300 backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>{lang === "tr" ? "Doğrulanmış Yönetici Referansı" : "Verified Executive Reference"}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                  <Building2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>RTC Teknoloji A.Ş.</span>
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative my-2">
              <Quote className="absolute -left-2 -top-3 h-10 w-10 text-emerald-400/20" />
              <blockquote className="relative pl-7 text-base font-normal italic leading-relaxed text-foreground/95 sm:text-lg">
                &ldquo;{data.reference.quote}&rdquo;
              </blockquote>
            </div>

            {/* Executive Profile & Direct Contact Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 font-heading text-xl font-bold text-emerald-300 ring-2 ring-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                  {data.reference.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    {data.reference.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {data.reference.role} •{" "}
                    <span className="font-semibold text-emerald-400">{data.reference.company}</span>
                  </p>
                </div>
              </div>

              {/* Direct non-truncated action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${data.reference.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-card/80 px-4 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-foreground"
                  title="E-posta gönder"
                >
                  <Mail className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>{data.reference.email}</span>
                </a>

                <a
                  href={`tel:${data.reference.phone.replace(/[^0-9+]/g, "")}`}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-card/80 px-4 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-foreground"
                  title="Telefon ile ara"
                >
                  <Phone className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>{data.reference.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LAYER 2: Akademik Yolculuk (Education & Academic Achievements) */}
        {/* ============================================================ */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
              <GraduationCap className="h-5 w-5 text-emerald-400" />
              <span>{lang === "tr" ? "Akademik Eğitim" : "Academic Pathway"}</span>
            </h3>
            <span className="font-mono text-xs text-muted-foreground">2017 – 2026</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* University Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(52,211,153,0.1)]">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                    {data.education.university.period}
                  </span>
                </div>

                <h4 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                  {data.education.university.school}
                </h4>
                <p className="mt-1 text-base font-semibold text-emerald-300">
                  {data.education.university.degree}
                </p>
                <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400/80" />
                  <span>{data.education.university.location}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {data.education.university.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 font-mono text-xs font-bold text-amber-300">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {data.education.university.gpa}
                </span>
                <span className="font-mono text-xs text-emerald-400/80">
                  {lang === "tr" ? "Lisans Derecesi" : "B.Sc. Degree"}
                </span>
              </div>
            </div>

            {/* High School Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-card/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(52,211,153,0.1)]">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                    <School className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-secondary/60 px-3.5 py-1 font-mono text-xs font-semibold text-muted-foreground border border-white/[0.06]">
                    {data.education.highSchool.period}
                  </span>
                </div>

                <h4 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                  {data.education.highSchool.school}
                </h4>
                <p className="mt-1 text-base font-semibold text-emerald-300">
                  {data.education.highSchool.degree}
                </p>
                <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400/80" />
                  <span>{data.education.highSchool.location}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {lang === "tr"
                    ? "Matematik, fen bilimleri ve algoritmik düşünce temellerini pekiştiren yüksek dereceli ortaöğretim eğitimi."
                    : "Advanced science and mathematics secondary education cultivating rigorous analytical and algorithmic problem-solving foundations."}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-300">
                  <Award className="h-3.5 w-3.5 text-emerald-400" />
                  {data.education.highSchool.grade}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {lang === "tr" ? "Yüksek Başarı Derecesi" : "High Honor Grade"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LAYER 3: Yabancı Dil & Operasyonel Yetkinlikler (Credentials Bento) */}
        {/* ============================================================ */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
              <Award className="h-5 w-5 text-emerald-400" />
              <span>{lang === "tr" ? "Yabancı Dil & Nitelikler" : "Language & Readiness"}</span>
            </h3>
            <span className="font-mono text-xs text-muted-foreground">Status</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Foreign Language */}
            <div className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                    <Languages className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/30">
                    {data.education.language.level}
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-foreground">
                  {data.education.language.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {data.education.language.details}
                </p>
              </div>

              {/* Progress Bar Indicator */}
              <div className="mt-5 border-t border-white/[0.06] pt-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>{lang === "tr" ? "Yetkinlik Seviyesi" : "Proficiency"}</span>
                  <span className="font-bold text-emerald-300">B1 Working</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-300" />
                </div>
              </div>
            </div>

            {/* Military Service Status */}
            <div className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/30">
                    {lang === "tr" ? "Tecilli" : "Deferred"}
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-foreground">
                  {lang === "tr" ? "Askerlik Durumu" : "Military Service"}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {lang === "tr"
                    ? "21.07.2028 tarihine kadar tecillidir. Tam zamanlı ve kurumsal çalışma için engel durum bulunmamaktadır."
                    : "Legally deferred until July 21, 2028. Full availability for full-time corporate software engineering roles."}
                </p>
              </div>

              <div className="mt-5 border-t border-white/[0.06] pt-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>21.07.2028</span>
                </span>
              </div>
            </div>

            {/* Driving License */}
            <div className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                    <Car className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 font-mono text-xs font-bold text-foreground border border-white/[0.08]">
                    Class B
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-foreground">
                  {lang === "tr" ? "Sürücü Belgesi" : "Driving License"}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {lang === "tr"
                    ? "B Sınıfı Ehliyet. Aktif araç sürüş deneyimi, yurt içi ve yurt dışı lokasyon/iş seyahatlerine uygunluk."
                    : "Class B driver license. Active driving experience, fully prepared for domestic and international mobility."}
                </p>
              </div>

              <div className="mt-5 border-t border-white/[0.06] pt-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{lang === "tr" ? "Aktif Sürücü" : "Active Driver"}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
