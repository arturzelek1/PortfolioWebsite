import "../styles/FrontPage.scss";

function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="something">
        <img
          src="/assets/background.svg"
          className="bg-image"
          alt="Background Image"
        />
      </div>
      <div className="content position-absolute top-50 start-50 translate-middle text-center">
        <p className="h4">Hi, I'm Artur</p>
        <p className="custom-h1">SOFTWARE ENGINEER</p>
        <p className="h5">
          Driven by innovation, delivering impactful software solutions.
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="/Projects"
            className="custom-btn btn-lg mt-5 p-3 px-5"
            role="button"
          >
            PROJECTS
          </a>
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
}

export default FrontPage;
