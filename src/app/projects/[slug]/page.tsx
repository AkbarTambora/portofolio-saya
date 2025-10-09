// src/app/projects/[slug]/page.tsx
import { projectData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectPageProps = {
  params: Promise<{ 
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; 
  
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link href="/#projects" className="text-blue-400 hover:underline mb-8 inline-block">&larr; Kembali ke semua proyek</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden my-8 shadow-lg">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex gap-4 items-center mb-8">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
            <FaGithub /> Source Code
          </a>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p>{project.longDescription}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Teknologi yang Digunakan</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}