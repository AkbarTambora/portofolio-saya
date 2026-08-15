// src/app/components/Skills.tsx
"use client"; 

import React from 'react';
import { motion } from 'framer-motion'; 
import { FaDatabase, FaTools, FaUsers, FaBriefcase, FaCode, FaNodeJs, FaDocker, FaFigma, FaBug } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiAngular, SiKotlin, SiMysql } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode; 
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Database & Core Systems",
    skills: [
      { name: 'MySQL / RDBMS', icon: <SiMysql size={36} /> },
      { name: 'MongoDB Compass', icon: <SiMongodb size={36} /> },
      { name: 'Stored Procedures', icon: <FaDatabase size={36} /> },
      { name: 'Core System Analysis', icon: <FaTools size={36} /> },
    ]
  },
  {
    title: "Development & Tech Stack",
    skills: [
      { name: 'Next.js / React', icon: <SiNextdotjs size={36} /> },
      { name: 'Node.js', icon: <FaNodeJs size={36} /> },
      { name: 'Android / Kotlin', icon: <SiKotlin size={36} /> },
      { name: 'Angular', icon: <SiAngular size={36} /> },
      { name: 'Docker / K8s', icon: <FaDocker size={36} /> },
      { name: 'Figma / UI Design', icon: <FaFigma size={36} /> },
    ]
  },
  {
    title: "System & Incident Operations",
    skills: [
      { name: 'Root Cause Analysis', icon: <FaBug size={36} /> },
      { name: 'Database Mitigation', icon: <FaDatabase size={36} /> },
      { name: 'Troubleshooting & Support', icon: <FaTools size={36} /> },
    ]
  },
  {
    title: "Domain & Soft Skills",
    skills: [
      { name: 'Koperasi & BPR Logic', icon: <FaBriefcase size={36} /> },
      { name: 'Cross-functional Comm', icon: <FaUsers size={36} /> },
      { name: 'Product Mindset', icon: <FaCode size={36} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-800 pb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 4 + index) * 0.05 }} 
                    className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/20 hover:bg-gray-800/40 transition-all duration-300 shadow-sm"
                  >
                    <div className="text-blue-400 shrink-0">{skill.icon}</div>
                    <p className="font-medium text-xs text-gray-200">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;