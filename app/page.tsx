import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import ClassesSection from "@/components/classes-section"
import WhyChooseUs from "@/components/why-choose-us"
import YouTubeVideos from "@/components/youtube-videos"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ClassesSection />
      <WhyChooseUs />
      <YouTubeVideos />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
