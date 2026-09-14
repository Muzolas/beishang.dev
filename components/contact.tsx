"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/site-data"

export function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* Background ambient glow blob */}
      <div
        aria-hidden
        className="blob-big top-1/3 -left-16 opacity-75"
      />



      <SectionHeading
        index="05"
        title={
          <>
            Contact <span className="text-emerald-400">Me</span>
          </>
        }
        subtitle="Have a project in mind, an architectural challenge, or just want to connect? Let's talk."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <ContactLink
            href={`mailto:${profile.email}`}
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={profile.email}
          />
          <ContactLink
            href={profile.github}
            icon={<GithubIcon className="h-5 w-5" />}
            label="GitHub"
            value={profile.githubHandle}
            external
          />
          <ContactLink
            href={profile.linkedin}
            icon={<LinkedinIcon className="h-5 w-5" />}
            label="LinkedIn"
            value={profile.linkedinHandle}
            external
          />
          <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-xs text-muted-foreground">Location</p>
              <p className="font-heading text-base font-semibold text-foreground">{profile.location}</p>
            </div>
          </div>
        </div>

        {/* Bianca styled form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-card/60 p-7 backdrop-blur-xl shadow-xl shadow-black/20"
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-heading text-sm font-semibold text-foreground">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alexander Smith"
              className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-400 focus:bg-background focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="message" className="mb-2 block font-heading text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, timeline, or requirements..."
              className="w-full resize-none rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-emerald-400 focus:bg-background focus:ring-2 focus:ring-emerald-400/20"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-950 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] active:scale-95"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  value: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
          {icon}
        </span>
        <div>
          <p className="font-mono text-xs text-muted-foreground">{label}</p>
          <p className="font-heading text-base font-semibold text-foreground group-hover:text-emerald-300 transition-colors">
            {value}
          </p>
        </div>
      </div>
      {external && (
        <ArrowUpRight className="h-5 w-5 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
      )}
    </a>
  )
}

