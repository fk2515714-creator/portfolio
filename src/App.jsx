import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="scroll-smooth bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
