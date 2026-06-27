import "./Portfolio.css"
import { FaArrowRight } from "react-icons/fa6";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import card3 from "../../assets/images/card-3.png";
import card4 from "../../assets/images/card-4.png";
import card5 from "../../assets/images/card-5.png";
import card6 from "../../assets/images/card-6.png";


function Portfolio() {
  return (
    <div className="Portfolio py">
      <div className="container">
        <div className="info">
          <h2 className=" fs-1 title">Portfolio</h2>
          <p>
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
        <div className="row g-2">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card1} alt="card-1" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  I focus on crafting smooth, responsive interfaces that balance
                  aesthetic appeal with practical functionality.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card2} alt="card-2" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  Designed an intuitive dashboard for product management,
                  emphasizing clarity and user efficiency.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card3} alt="card-3" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  Developed a modern admin panel with a focus on usability and
                  seamless navigation for end users and so on.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card4} alt="card-4" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  Created a responsive dashboard layout that adapts smoothly
                  across devices and screen sizes and so on.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card5} alt="card-5" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  Implemented interactive charts and widgets to visualize
                  product data effectively for stakeholders.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img className="card-image" src={card6} alt="card-6" />
              <div className="card-body">
                <span>UI-UX DESIGN</span>
                <b>Product Admin Dashboard</b>
                <p className="m-0">
                  Enhanced user experience by streamlining workflows and
                  optimizing interface components and so on.
                </p>
                <a href="#!" className="card-btn">
                  Case Study <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary m-auto">More Project</button>
      </div>
    </div>
  );
}

export default Portfolio;
