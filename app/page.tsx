import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutOverview } from "@/components/about-overview"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollTop } from "@/components/scroll-top"
import { TopographyBg } from "@/components/topography-bg"
import { LanguageProvider } from "@/lib/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <TopographyBg />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <AboutOverview />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollTop />
        </div>
      </div>
    </LanguageProvider>
  )
}
