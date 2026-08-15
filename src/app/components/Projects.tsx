// src/app/components/Projects.tsx
import Image from 'next/image'; 
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import Link from 'next/link'; 
import { projectData } from '@/data/projects'; 

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Featured Projects & Case Studies</h2>
          <p className="text-gray-400 text-sm">
            Kumpulan proyek pengembangan perangkat lunak dan studi kasus mitigasi database produksi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-900/90 rounded-2xl overflow-hidden group h-full flex flex-col hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-blue-500/30">
              {/* Image Container with link to detail */}
              <Link href={`/projects/${project.slug}`} className="relative h-56 w-full overflow-hidden block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.category && (
                  <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-800">
                    {project.category}
                  </span>
                )}
              </Link>
              
              <div className="p-6 flex-grow flex flex-col">
                {/* Title with link to detail */}
                <Link href={`/projects/${project.slug}`} className="hover:text-blue-400 transition-colors inline-block mb-2">
                  <h3 className="text-xl font-bold text-white leading-snug">{project.title}</h3>
                </Link>
                
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="text-[11px] bg-gray-800 text-gray-300 px-2.5 py-0.5 rounded border border-gray-700/40 font-mono">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer buttons / links */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/80">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <FaFolderOpen size={14} /> Baca Studi Kasus &rarr;
                  </Link>

                  <div className="flex gap-3 items-center">
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Source Code"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
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