// app/components/Projects.tsx
const projectData = [
    {
      title: "Aplikasi E-commerce",
      description: "Platform jual beli online dibangun dengan MERN stack.",
      image: "/project1.png", // Simpan gambar di folder `public`
      liveLink: "#",
      codeLink: "#",
    },
    // ...proyek lainnya
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              {/* Tampilkan data proyek di sini */}
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;