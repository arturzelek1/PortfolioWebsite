import "../styles/Navbar.scss";

interface SectionProps {
  about: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
}

function Navbar({ sectionRefs }: { sectionRefs: SectionProps }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src="/assets/avatarFigma.JPG"
            className="Avatar me-3 ms-3"
            alt="Picture of Developer"
          />
          ARTUR ZELEK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ cursor: "pointer" }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() =>
                  sectionRefs.about.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() =>
                  sectionRefs.projects.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() =>
                  sectionRefs.contact.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
