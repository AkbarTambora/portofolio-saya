// src/app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import TechNotes from './components/TechNotes';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import MotionWrapper from './components/MotionWrapper'; 

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <MotionWrapper>
        <Hero />
      </MotionWrapper>
      <MotionWrapper>
        <About />
      </MotionWrapper>
      <MotionWrapper>
        <Experience />
      </MotionWrapper>
      <MotionWrapper>
        <Projects />
      </MotionWrapper>
      <MotionWrapper>
        <Skills />
      </MotionWrapper>
      <MotionWrapper>
        <TechNotes />
      </MotionWrapper>
      <MotionWrapper>
        <Guestbook />
      </MotionWrapper>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </main>
  );
}