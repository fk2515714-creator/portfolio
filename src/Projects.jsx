import samsungImg from "./assets/samsung.jpeg";

function Projects() {
  const projectData = [
    {
      title: "Samsung Website Clone",
      description:
        "A responsive Samsung website clone showcasing products, navigation, and interactive UI, built with modern web technologies for realistic user experience.",
      img: samsungImg,
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://samsung-hazel-nu.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "A To-Do List app for creating, organizing, and managing tasks efficiently with deadlines, priorities, and a user-friendly interface.",
      img: "src/assets/todo list.jpeg",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://todo-list-ils8.vercel.app/",
      code: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with 5-day forecasts, location search, and interactive maps.",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1169&q=80",
      tech: ["JavaScript", "API Integration", "CSS"],
      demo: "https://testing-app-33xa.vercel.app/",
      // code: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500">
                    Image not available
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.code && project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:underline"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Export at the very end
export default Projects;
