function Skills() {
  const skills = [
    { name: "React", icon: "fab fa-react", percent: 90 },
    { name: "JavaScript", icon: "fab fa-js", percent: 95 },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", percent: 92 },
    { name: "HTML", icon: "fab fa-html5", percent: 97 },
    { name: "GitHub", icon: "fab fa-github", percent: 88 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary-light/10 dark:bg-primary-dark/10 rounded-full">
                <i
                  className={`${skill.icon} text-3xl text-primary-light dark:text-primary-dark`}
                ></i>
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
