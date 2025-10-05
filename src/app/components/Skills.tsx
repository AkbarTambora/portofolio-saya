// src/app/components/Skills.tsx
"use client"; 

import React from 'react';
import { motion } from 'framer-motion'; 
import { FaReact, FaNodeJs, FaDocker, FaFigma, FaAndroid } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiKubernetes, SiAngular, SiKotlin } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode; 
}

const skills: Skill[] = [
  { name: 'Web Developer', icon: <FaReact size={48} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} /> },
  { name: 'Angular', icon: <SiAngular size={48} /> },
  { name: 'Node.js', icon: <FaNodeJs size={48} /> },
  { name: 'MongoDB', icon: <SiMongodb size={48} /> },
  { name: 'Android Studio', icon: <FaAndroid size={48} /> },
  { name: 'Kotlin', icon: <SiKotlin size={48} /> },
  { name: 'Figma', icon: <FaFigma size={48} /> },
  { name: 'Docker', icon: <FaDocker size={48} /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={48} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }} 
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-transform hover:-translate-y-2"
            >
              <div className="text-blue-400 mb-3">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;