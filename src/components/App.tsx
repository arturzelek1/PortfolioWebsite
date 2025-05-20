import { useRef } from "react";
import Navbar from "./Navbar";
import FrontPage from "./FrontPage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Footer";
import "../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Element } from "react-scroll";
import AnimatedBackground from "./AnimatedBackground";

function App() {
  const sectionRefs = {
    about: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  return (
    <>
      <div className="background">
        <AnimatedBackground />
      </div>
      <Navbar sectionRefs={sectionRefs} />
      <Element name="front" className="section">
        <FrontPage />
      </Element>

      <Element name="about" className="section">
        <AboutMe sectionRefs={sectionRefs.about} />
      </Element>

      <Element name="projects" className="section">
        <Projects sectionRefs={sectionRefs.projects} />
      </Element>

      <Element name="contact" className="section">
        <Contact sectionRefs={sectionRefs.contact} />
      </Element>
    </>
  );
}

export default App;
