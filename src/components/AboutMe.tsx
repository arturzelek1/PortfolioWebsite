import "../styles/AboutMe.scss";
import { RefObject } from "react";

interface AboutMeProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function AboutMe({ sectionRefs }: AboutMeProps) {
  return (
    <div className="about-me-container container-fluid" ref={sectionRefs}>
      <div className="about-me-info">
        <div className="row">
          <div className="about-me-title col-12 col-md-12 col-lg-8">
            Software Engineer, who judges book by its cover.
          </div>
        </div>
        <div className="row">
          <div className="about-me-name col-12 col-md-6 col-lg-4">
            <div className="about-me-name">Hi, I'm Artur.</div>
          </div>
          <div className="about-me-description col-12 col-md-6 col-lg-4">
            Software Engineer with a strong foundation in full-stack
            development, specializing in C# (.NET), JavaScript (React), and
            Python (Django). With a passion for building scalable,
            high-performance applications, I focus on integrating innovative
            solutions that address real-world problems. My experience spans
            across various domains, including game development with Unity and
            mobile applications using Android. I thrive in environments that
            challenge me to learn new technologies and techniques. Each project
            is approached individually, ensuring tailored solutions that meet
            specific goals, requirements, and user needs. Eager to continuously
            grow and stay on the cutting edge of software engineering, I am
            always excited to take on new challenges and contribute to impactful
            projects.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="about-me-stack col-12 col-md-12 col-lg-8">MY STACK</div>
      </div>
      <div className="about-me-skills-container container-fluid">
        <div className="row">
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-title">FRONTEND</div>
          </div>
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Frontend/js.png"
              />
              JavaScript
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Frontend/typescript.png"
              />
              TypeScript
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Frontend/physics.png"
              />
              React
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Frontend/bootstrap.png"
              />
              Bootstrap5
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo-tailwind"
                src="/assets/StackIcons/Frontend/tailwind-css-icon.png"
              />
              Tailwind CSS
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Frontend/framermotion.png"
              />
              Framer Motion
            </div>
          </div>
        </div>
        <div className="row">
          <div className="about-me-skills col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-title">BACKEND</div>
          </div>
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo-dotnet"
                src="/assets/StackIcons/Backend/net-framework.png"
              />
              .NET
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Backend/node-js.png"
              />
              Node.JS
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Backend/django.png"
              />
              Django
            </div>
          </div>
        </div>

        <div className="row">
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-title">DATABASE</div>
          </div>
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Database/postgresql.png"
              />
              PostgreSQL
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Database/MongoDB.png"
              />
              MongoDB
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Database/firebase.png"
              />
              Firebase
            </div>
          </div>
        </div>
        <div className="row">
          <div className="about-me-skills col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-title">TOOLS</div>
          </div>
          <div className="about-me-skills d-flex flex-wrap col-12 col-md-12 col-lg-4">
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Tools/git.png"
              />
              Git
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Tools/ubuntu.png"
              />
              Ubuntu
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Tools/figma.png"
              />
              Figma
            </div>
            <div className="about-me-skills-list-item">
              <img
                className="brand-logo"
                src="/assets/StackIcons/Tools/docker.png"
              />
              Docker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
