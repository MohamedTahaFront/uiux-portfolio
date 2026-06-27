import "./About.css";
import person from "../../assets/images/person.png";
import {
  FaBehance,
  FaDownload,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

function About() {
  return (
    <div className="About py">
      <div className="container">
        <div className="all-boxs">
          <div className="image">
            <img src={person} alt="person" />
            <div className="media">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaBehance />
              </a>
            </div>
          </div>
          <div className="details">
            <h2 className="fw-bold">
              I am Professional User Experience Designer
            </h2>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="btns">
              <button className="btn-primary">My Projects</button>
              <button className="btn-secondary">
                <FaDownload /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
