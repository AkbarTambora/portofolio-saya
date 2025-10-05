// src/app/components/Experience.tsx
import React from 'react';

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Cakap",
    period: "Januari 2025 - April 2025",
    tasks: [
      "Mengenal dan menggunakan Docker & Kubernetes untuk memahami alur environment pengembangan dan pengelolaan container.",
      "Berperan sebagai frontend developer dalam tim mini project e-learning, membangun antarmuka pengguna menggunakan Angular.",
      "Berkolaborasi dalam tim lintas fungsi (2 frontend, 3 backend) dengan metode agile.",
    ]
  },
  {
    role: "Telemarketing",
    company: "STMIK Indo Daya Suvana",
    period: "November 2022 - Maret 2023",
    tasks: [
      "Melakukan filtering data siswa potensial & tidak potensial.",
      "Menawarkan program kuliah S1 kepada siswa potensial.",
      "Membantu mengurus seminar dan event untuk branding kampus.",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;