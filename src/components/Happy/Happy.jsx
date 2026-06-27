import "./Happy.css";
import linkedIn from "../../assets/images/linkedin.svg";
import amazon from "../../assets/images/amazon.svg";
import medium from "../../assets/images/medium.svg";
import spotify from "../../assets/images/spotify.svg";
import google from "../../assets/images/google.svg";
import dribbble from "../../assets/images/dribbble.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Happy() {
  return (
    <div className="Happy py">
      <div className="container">
        <div className="info">
          <h2 className=" fs-1 title">Happy Clients</h2>
          <p>
            I've had the pleasure of working with a diverse range of companies,
            from startups to established brands.
          </p>
        </div>
        <Swiper
          loop
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="Happy-swiper"
        >
          <SwiperSlide>
            <img src={linkedIn} alt="linkedIn" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon} alt="amazon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={medium} alt="medium" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={spotify} alt="spotify" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={google} alt="google" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dribbble} alt="dribbble" />
          </SwiperSlide>
        </Swiper>

        <div className="last">
          <h2 className=" fs-1 title">Testimonial</h2>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="down-swiper"
          >
            <SwiperSlide>
              <div className="box">
                <div className="details">
                  <p className="m-0">
                    Working with this team was a fantastic experience. Their
                    attention to detail and commitment to quality exceeded our
                    expectations.
                  </p>
                </div>
                <p className="m-0">
                  From the initial consultation to the final delivery, every
                  step was handled professionally. The end result was a product
                  that not only met our needs but also impressed our
                  stakeholders. Highly recommended!
                </p>
                <div className="down">
                  <p className="m-0">Esther Howard</p>
                  <p className="m-0">Managing Director, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <div className="details">
                  <p className="m-0">
                    Their expertise in UI/UX design helped us transform our
                    digital presence and improve user engagement.
                  </p>
                </div>
                <p className="m-0">
                  “ The team demonstrated a deep understanding of our
                  requirements and delivered a solution that was both visually
                  appealing and highly functional. Communication was clear
                  throughout the project. ”
                </p>
                <div className="down">
                  <p className="m-0">Ali Haider</p>
                  <p className="m-0">COO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <div className="details">
                  <p className="m-0">
                    Professional, reliable, and creative—everything you want in
                    a development partner.
                  </p>
                </div>
                <p className="m-0">
                  “ They delivered our project on time and went above and beyond
                  to ensure our satisfaction. The new features have made a
                  significant difference for our users. We look forward to
                  working together again. ”
                </p>
                <div className="down">
                  <p className="m-0">Elon Max</p>
                  <p className="m-0">Managing Director, KFC Company</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Happy;
