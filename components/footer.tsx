import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { profile } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-emerald-400">{profile.alias}</span>
          <span className="text-foreground">.dev</span> — © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-emerald-300">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-emerald-300">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground transition-colors hover:text-emerald-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
