import "./Blog.css";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3-.jpg";
import blog4 from "../../assets/images/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Blog() {
  return (
    <div className="Blog py">
      <div className="container">
        <div className="info">
          <h2 className=" fs-1 title">Blog</h2>
          <p>
            Check out my recent blog posts where I share insights on design,
            development, and the latest industry trends.
          </p>
        </div>
        <div className="SwiperWrapper">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog1} alt="blog-1" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>Designing Engaging User Interfaces for M...</b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog2} alt="blog-2" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>Tips for Effective Dashboard Layouts and...</b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog3} alt="blog-3" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>How to Visualize Data for Better Product...</b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog4} alt="blog-4" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>Responsive Design: Adapting to All Devic...</b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog2} alt="blog-2" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>Streamlining Workflows with UI/UX Best P...</b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img className="card-image" src={blog1} alt="blog-1" />
                <div className="card-body">
                  <span>22 Oct, 2020 / 246 Comments</span>
                  <b>Optimizing Interface Components for Perf...</b>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Blog;
