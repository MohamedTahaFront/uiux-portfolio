import "./Process.css";
import { LuChartLine, LuLaptop, LuNotepadText, LuPencil } from "react-icons/lu";

function Process() {
  return (
    <>
      <section class="spikes"></section>

      <div className="Process py">
        <div className="container">
          <div className="all-boxs">
            <div className="details">
              <h2 className=" fs-1 title">Work Process</h2>
              <p>
                Driven by design and powered by code, I create digital
                interfaces that feel intuitive and perform seamlessly. Every
                layout, animation, and component is crafted with intention —
                merging usability with visual clarity,
              </p>
              <p>
                I blend clean design with efficient code to build engaging,
                user-friendly web experiences that stand out.
              </p>
            </div>
            <div className="cards">
              <div className="column">
                <div className="card">
                  <span>
                    <LuNotepadText />
                  </span>
                  <div className="info">
                    <b>1. Research</b>
                    <p>
                      Design meets function in every pixel, blending clarity
                      with intuitive motion.
                    </p>
                  </div>
                </div>
                <div className="card mt-12">
                  <span>
                    <LuPencil />
                  </span>
                  <div className="info">
                    <b>3. Design</b>
                    <p>
                      I design seamless digital experiences with precision,
                      purpose, and a touch of elegance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card mt-24">
                  <span>
                    <LuChartLine />
                  </span>
                  <div className="info">
                    <b>2. Analyze</b>
                    <p className="m-0">
                      Crafting clean, thoughtful interfaces where form flows
                      seamlessly into function and clarity.
                    </p>
                  </div>
                </div>
                <div className="card mt-12">
                  <span>
                    <LuLaptop />
                  </span>
                  <div className="info">
                    <b>4. Launch</b>
                    <p className="m-0">
                      I craft digital products where thoughtful design meets
                      performance-driven, responsive development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
