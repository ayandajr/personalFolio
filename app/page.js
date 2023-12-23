import Image from 'next/image'
import HeroSection from "./components/HeroSection.jsx"
import Navbar from './components/Navbar.jsx'
import AboutSection from './components/AboutSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import AchievementsSection from './components/AchievementsSection.jsx'
import Footer from './components/Footer.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <div className='flex justify-center text-slate-400'>
          <p className='text-center'>
            Please note if you are viewing this website on desktop, for the best possible experience please ensure that you are using Google Chrome to render this website.
          </p>
        </div>
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
