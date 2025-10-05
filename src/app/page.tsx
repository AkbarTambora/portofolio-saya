// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}