export default function Projects() {
  const projects = [
    { title: "Project 1", description: "A brief description of Project 1" },
    { title: "Project 2", description: "A brief description of Project 2" },
    { title: "Project 3", description: "A brief description of Project 3" },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

