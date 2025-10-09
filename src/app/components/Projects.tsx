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
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={index}> 
              <div className="bg-gray-800 rounded-lg overflow-hidden group h-full flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex gap-4 items-center mt-auto">
                    <span className="text-gray-300 hover:text-white transition-colors"><FaGithub size={24} /></span>
                    <span className="text-gray-300 hover:text-white transition-colors"><FaExternalLinkAlt size={22} /></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;