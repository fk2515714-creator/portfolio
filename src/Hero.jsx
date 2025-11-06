import fardeenimage from "./assets/fardeenimage.jpeg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Fardeen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Frontend Developer
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
            I build exceptional digital experiences with modern web
            technologies...
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center animate-slide-up">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark">
            <img
              src={fardeenimage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-light dark:bg-primary-dark opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
