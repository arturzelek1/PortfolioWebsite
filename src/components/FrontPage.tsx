import "../styles/FrontPage.scss";
import AnimatedBackground from "./AnimatedBackground";

const FrontPage: React.FC = () => {
  return (
    <div className="FrontPage">
      <div className="background">
        <AnimatedBackground />
      </div>
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="content">
          <p className="custom-h4">Hi, I'm Artur</p>
          <p className="custom-h1">FRONTEND DEVELOPER</p>
          <p className="custom-h5">
            Driven by innovation, delivering impactful software solutions.
          </p>
          <div className="d-flex">
            <a
              href="/Projects"
              className="custom-btn btn-lg mt-5 p-3 px-5"
              role="button"
            >
              <span>PROJECTS</span>
            </a>
          </div>
        </div>
      </div>
      <div className="MouseScrollDown position-absolute bottom-0 start-50 translate-middle">
        <img
          src="/assets/down-arrow.png"
          className="arrow-down"
          alt="Scroll down"
        ></img>
      </div>
    </div>
  );
};

export default FrontPage;
