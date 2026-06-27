import "./Footer.css";
function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="top-footer">
          <a className="logo fs-2" href="#!">
            <span>B</span>Brooklyn
          </a>
          <ul className={`links`}>
            <li>
              <a className="link active" href="#!">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                Process
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                Portfolio
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                Blog
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                Services
              </a>
            </li>
            <li>
              <a className="link" href="#!">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-down">
          <p>Designed & Developed by Mohamed Taha ❤️</p>
          <p>© 2026 Mohamed Taha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
