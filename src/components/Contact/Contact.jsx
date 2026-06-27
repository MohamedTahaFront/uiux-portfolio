import "./Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";


function Contact() {
  return (
    <>
    <section class="spikes"></section>
    <div className="Contact py">
      <div className="container">
        <div className="all-boxs">
          <div className="box">
            <div className="head">
              <h2 className=" fs-2 title">Let’s discuss your Project</h2>
              <p className="m-0">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>
            <div className="info">
              <div className="info-row">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <small>Address:</small>
                  <p>New Mexico, 31134</p>
                </div>
              </div>
              <div className="info-row">
                <span>
                  <MdEmail />
                </span>
                <div>
                  <small>My Email:</small>
                  <p>mymail@mail.com</p>
                </div>
              </div>
              <div className="info-row">
                <span>
                  <FaPhone />
                </span>
                <div>
                  <small>Call Me Now:</small>
                  <p>00-123 00000</p>
                </div>
              </div>
            </div>
            <div className="media">
              <a href="#!">
                <FaFacebook />
              </a>
              <a href="#!">
                <FaDribbble />
              </a>
              <a href="#!">
                <FaInstagram />
              </a>
              <a href="#!">
                <FaLinkedin />
              </a>
              <a href="#!">
                <FaBehance />
              </a>
            </div>
          </div>

          <div className="form-box">
            <p>
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="text" placeholder="Location*" />
              <div className="group">
                <input className="Budget" type="text" placeholder="Budget*" />
                <input type="text" placeholder="Subject*" />
              </div>
              <textarea placeholder="Message*" />
              <button className="btn btn-primary" type="submit">Submit <VscSend /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
