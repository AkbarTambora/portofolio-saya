// src/app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
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
        <Footer />
      </MotionWrapper>
    </main>
  );
}