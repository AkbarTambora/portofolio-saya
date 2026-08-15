// src/app/components/ProjectDetailClient.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaExclamationTriangle, FaTools, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution' | 'impact'>('overview');

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          href="/#projects" 
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-flex items-center gap-2 text-sm font-medium"
        >
          &larr; Kembali ke semua proyek
        </Link>
        
        {project.category && (
          <div>
            <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {project.category}
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
          {project.title}
        </h1>
        
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl border border-gray-800">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Action Links */}
        {(project.liveLink || project.codeLink) && (
          <div className="flex flex-wrap gap-4 items-center mb-10">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors text-sm shadow-md"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors text-sm border border-gray-700"
              >
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        )}

        {/* Interactive Case Study Tabs */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex border-b border-gray-800 pb-3 gap-2 sm:gap-4 overflow-x-auto mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 pb-2 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FaBookOpen size={14} /> Ringkasan
            </button>
            <button
              onClick={() => setActiveTab('challenge')}
              className={`flex items-center gap-2 pb-2 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'challenge'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FaExclamationTriangle size={14} /> Tantangan & Isu
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`flex items-center gap-2 pb-2 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'solution'
                  ? 'border-cyan-500 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FaTools size={14} /> Solusi & Mitigasi
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`flex items-center gap-2 pb-2 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'impact'
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FaCheckCircle size={14} /> Dampak & Hasil
            </button>
          </div>

          {/* Tab Contents */}
          <div className="text-gray-300 leading-relaxed text-base min-h-[140px]">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Gambaran Umum Proyek / Studi Kasus</h3>
                <p>{project.longDescription}</p>
              </div>
            )}

            {activeTab === 'challenge' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-amber-400 mb-2">Tantangan & Problem Statement</h3>
                <p>{project.challenge || 'Tantangan operasional dan teknis yang dihadapi dalam penanganan kasus ini.'}</p>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Langkah Penyelesaian & Analisis Teknis</h3>
                <p>{project.solution || 'Langkah mitigasi database, analisis query, dan perbaikan logika bisnis.'}</p>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-emerald-400 mb-2">Dampak Bisnis & Hasil Akhir</h3>
                <p>{project.impact || 'Hasil peningkatan performa sistem, kepatuhan SOP ISO 27001, dan kepuasan pengguna.'}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="p-6 bg-gray-950/50 border border-gray-800/80 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-white">Teknologi & Tools yang Digunakan</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-gray-800 text-gray-300 border border-gray-700/50 px-3.5 py-1.5 rounded-lg text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
