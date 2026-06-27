import "./Services.css";
function Services() {
  return (
    <>
      <section class="spikes"></section>
      <div className="Services py">
        <div className="container">
          <div className="all-boxs">
            <div className="details">
              <h2 className=" fs-1 title">What I do?</h2>
              <p>
                I specialize in designing user experiences, crafting engaging
                interfaces, and building robust web applications that deliver
                value and usability.
              </p>
              <p>
                My approach combines creativity and technical expertise to
                deliver solutions that are both visually appealing and highly
                functional for users.
              </p>
              <button className="btn btn-primary">Say Hello!</button>
            </div>
            <div className="rows">
              <div className="info-row">
                <h4 className=" fw-bold">User Experience (UX)</h4>
                <p className="m-0">
                  I design intuitive and enjoyable experiences by understanding
                  user needs, conducting research, and creating wireframes and
                  prototypes that enhance usability.
                </p>
              </div>
              <div className="info-row">
                <h4 className=" fw-bold">User Interface (UI)</h4>
                <p className="m-0">
                  I craft visually appealing and consistent interfaces, focusing
                  on layout, color, and typography to ensure a seamless and
                  engaging user journey.
                </p>
              </div>
              <div className="info-row">
                <h4 className=" fw-bold">Web Development</h4>
                <p className="m-0">
                  I build responsive and high-performance web applications using
                  modern technologies, ensuring accessibility, scalability, and
                  maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
