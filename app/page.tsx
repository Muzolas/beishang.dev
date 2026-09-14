import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollTop } from "@/components/scroll-top"
import { TopographyBg } from "@/components/topography-bg"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <TopographyBg />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </div>
  )
}



