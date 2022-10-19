import React from "react";
import "./Blog.css";
import Blog1 from "./img/P11.jpg";
import Blog3 from "./img/P10.png";

function Blog() {
  return (
    <div className="blog component__space bodyBlog" id="Blog">
      <div className="heading">
        <h1 className="heading">Upcoming Projects</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Blog1}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h4 className="project__text">Classy Service System</h4>
                <h5 className="project__text">Using MERN Stack</h5>
                {/* <a
                  href=""
                  className="blog project__btn btn"
                >
                  Read More
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Blog3}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h4 className="project__text">FALCON Mobile App</h4>
                <h5 className="project__text">Using React Native</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
