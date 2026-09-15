"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { lang, data } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      lang === "tr"
        ? `Portfolyo İletişim: ${name || "İş Teklifi / Proje"}`
        : `Portfolio Contact: ${name || "Opportunity / Project"}`
    )
    const body = encodeURIComponent(
      `${message}\n\n—\nİsim / Name: ${name}\nE-posta / Email: ${email}`
    )
    window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Background ambient glow blob */}
      <div aria-hidden className="blob-big top-1/3 -left-16 opacity-60" />

      <SectionHeading
        index="06"
        title={
          <>
            {lang === "tr" ? "İletişime " : "Get in "}
            <span className="text-emerald-400">
              {lang === "tr" ? "Geçin" : "Touch"}
            </span>
          </>
        }
        subtitle={
          lang === "tr"
            ? "Yeni bir proje, kurumsal iş teklifi veya sistem mimarisi üzerine konuşmak için dilediğiniz kanaldan ulaşabilirsiniz."
            : "Have a software role, an architectural challenge, or a new project? Feel free to reach out directly."
        }
      />

      <div className="grid gap-8 md:grid-cols-12">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="flex flex-col gap-4 md:col-span-5">
          {/* Phone Card with Copy & Call */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${data.profile.phoneRaw}`}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110"
                title="Ara"
              >
                <Phone className="h-5 w-5" />
              </a>
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  {lang === "tr" ? "Telefon" : "Phone"}
                </p>
                <a
                  href={`tel:${data.profile.phoneRaw}`}
                  className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-emerald-300"
                >
                  {data.profile.phone}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(data.profile.phone, "phone")}
              className="rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:border-emerald-400 hover:text-emerald-300"
              title="Numarayı kopyala"
            >
              {copiedType === "phone" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Email Card with Copy & Mailto */}
          <div className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${data.profile.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110"
                title="E-posta gönder"
              >
                <Mail className="h-5 w-5" />
              </a>
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  {lang === "tr" ? "E-posta" : "Email"}
                </p>
                <a
                  href={`mailto:${data.profile.email}`}
                  className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-emerald-300 sm:text-base"
                >
                  {data.profile.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(data.profile.email, "email")}
              className="rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:border-emerald-400 hover:text-emerald-300"
              title="E-postayı kopyala"
            >
              {copiedType === "email" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href={data.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                <LinkedinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-emerald-300">
                  {data.profile.linkedinHandle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
          </a>

          {/* GitHub Card */}
          <a
            href={data.profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                <GithubIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs text-muted-foreground">GitHub</p>
                <p className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-emerald-300">
                  {data.profile.githubHandle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                {lang === "tr" ? "Konum" : "Location"}
              </p>
              <p className="font-heading text-base font-semibold text-foreground">
                {data.profile.location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-white/[0.08] bg-card/60 p-7 sm:p-9 backdrop-blur-xl shadow-xl shadow-black/20 md:col-span-7"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-4">
            <MessageSquare className="h-5 w-5 text-emerald-400" />
            <h4 className="font-heading text-lg font-bold text-foreground">
              {lang === "tr" ? "Hızlı Mesaj Gönder" : "Send a Direct Message"}
            </h4>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {lang === "tr" ? "Adınız / Şirket" : "Your Name / Company"}
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === "tr" ? "Örn: Ahmet Yılmaz" : "e.g. Alex Morgan"}
                className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-400 focus:bg-background focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {lang === "tr" ? "E-posta Adresiniz" : "Your Email"}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-400 focus:bg-background focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="message" className="mb-2 block font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {lang === "tr" ? "Mesajınız" : "Message"}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                lang === "tr"
                  ? "Projeniz, iş teklifiniz veya mimari detaylar hakkında bilgi verin..."
                  : "Tell me about your software needs, engineering role, or timeline..."
              }
              className="w-full resize-none rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-400 focus:bg-background focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>

          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-emerald-950 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] active:scale-95"
          >
            <span>{lang === "tr" ? "Mesajı İlet" : "Send Message"}</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  )
}
