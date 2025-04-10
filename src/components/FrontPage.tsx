import "../styles/FrontPage.scss";

const FrontPage: React.FC = () => {
  return (
    <div className="FrontPage">
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="content">
          <div className="row">
            <p className="custom-h4 col-12 col-md-12 col-lg-12">
              Hi, I'm Artur
            </p>
          </div>
          <div className="row">
            <p className="custom-h1 col-12 col-md-12 col-lg-12">FULLSTACK</p>
            <p className="custom-h1 col-12 col-md-12 col-lg-11">DEVELOPER</p>
          </div>
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
