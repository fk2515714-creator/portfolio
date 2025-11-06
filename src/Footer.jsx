function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            © 2025 All Rights Reserved
          </p>
        </div>

        <div className="flex space-x-6">
          {["home", "about", "projects", "contact"].map((link) => (
            <a key={link} href={`#${link}`} className="nav-link capitalize">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Export at the very end
export default Footer;
