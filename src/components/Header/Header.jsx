import "./Header.css";
import person from "../../assets/images/person.png"
function Header() {
  return (
    <div className="Header py">
      <div className="container">
        <div className="all-boxs">
          <div className="box">
            <div className="info">
              <b className="h1 fw-semibold">Hello, I’m <br /> Brooklyn Gilbert</b>
              <p>I'm a Freelance <span>UI/UX Designer</span> and <span>Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
              <button className="btn btn-primary">Say Hello!</button>
            </div>
            <div className="details">
              <div>
                <h2 className="fw-semibold">15 Y.</h2>
                <p>Experience</p>
              </div>
              <div>
                <h2 className="fw-semibold">250+</h2>
                <p>Projects Completed</p>
              </div>
              <div>
                <h2 className="fw-semibold">58</h2>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={person} alt="person" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
