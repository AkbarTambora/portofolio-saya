// src/app/projects/[slug]/page.tsx
import { projectData } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetailClient from "@/app/components/ProjectDetailClient";

type ProjectPageProps = {
  params: Promise<{ 
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Akbar Khaerullah`,
    description: project.description,
    keywords: [...project.tags, "Akbar Khaerullah", "Portfolio", "Case Study"],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; 
  
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}