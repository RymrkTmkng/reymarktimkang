import React from "react";

const Navigation = () => {
  const handleScroll = (e, section) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetSection = document.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 vw-100 justify-content-center">
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#home"
                  onClick={(e) => handleScroll(e, "#home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={(e) => handleScroll(e, "#about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  href="#work"
                  onClick={(e) => handleScroll(e, "#work")}
                >
                  Work
                </a>
              </li>
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={(e) => handleScroll(e, "#projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  href="#learn"
                  onClick={(e) => handleScroll(e, "#learn")}
                >
                  Learn
                </a>
              </li>
              <li className="nav-item navspace">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
