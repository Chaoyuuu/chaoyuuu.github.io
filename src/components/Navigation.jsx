
export function Navigation() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div style={{zIndex: '9999', background: 'white', position:'sticky'}} className="px-[20px] lg:px-[120px]">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="hidden md:block text-gray-900 hover:text-gray-600 transition-colors"
          >
            Portfolio
          </button>
          <div className="flex items-center gap-8 sm:gap-12">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
  );
}
