// src/app/components/Projects.tsx
import Image from 'next/image'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link'; 
import { projectData } from '@/data/projects'; 

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-700/30">
              {/* Image Container with link to detail */}
              <Link href={`/projects/${project.slug}`} className="relative h-56 w-full overflow-hidden block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              
              <div className="p-6 flex-grow flex flex-col">
                {/* Title with link to detail */}
                <Link href={`/projects/${project.slug}`} className="hover:text-blue-400 transition-colors inline-block mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </Link>
                
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>
                
                {/* Footer buttons / links */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-1 transition-colors animate-pulse-subtle"
                  >
                    Detail Proyek &rarr;
                  </Link>
                  <div className="flex gap-4 items-center">
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Source Code"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
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