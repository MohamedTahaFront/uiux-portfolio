import { FaArrowRight } from "react-icons/fa6";
import "./Idea.css";
function Idea() {
  return (
    <div className="Idea py">
      <div className="container">
        <h2 className=" fs-1 title">
          Do you have a Project Idea? Let's discuss your project!
        </h2>
        <p className="m-0">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <button className="btn btn-primary m-auto">
          Let's work Together <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Idea;
