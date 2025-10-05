// src/app/components/Projects.tsx
import Image from 'next/image'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    title: "Web Aplikasi Panduan Karier Siswa SMA-Z",
    description: "Web Aplikasi untuk melakukan tes minat dan bakat untuk siswa SMA Z berbasis RIASEC dengan Nextjs dan MongoDB.",
    image: "/project1.png", // Path dari folder public
    liveLink: "https://panduan-karier-sma-z.vercel.app/",
    codeLink: "https://github.com/AkbarTambora/panduan-karier-sma-z", // Ganti dengan link repo proyek
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  // Project Lain
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4 items-center">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><FaGithub size={24} /></a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors"><FaExternalLinkAlt size={22} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;