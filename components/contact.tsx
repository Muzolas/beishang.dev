"use client"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        index="05"
        title="Get In Touch"
        subtitle="Have a project in mind or just want to connect? Let's talk."
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
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
      className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </a>
  )
}
