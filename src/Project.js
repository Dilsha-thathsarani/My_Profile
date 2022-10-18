import React from "react";
import "./Project.css";
import Project1 from "./img/P1.jpg";
import Project2 from "./img/P2.jpg";
import Project3 from "./img/P3.jpg";
import Project4 from "./img/P4.jpg";
import Project5 from "./img/P5.jpg";
import Project6 from "./img/P6.jpg";
import Project7 from "./img/P7.jpg";
import Project8 from "./img/P8.jpg";


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
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
                    src={Project1}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Research Project Management <br />
                  Tool for SLIIT
                </h4>
                <h6 className="project__text">
                  Develop Using MERN <br />
                  React JS, Node JS <br />
                  Mongo DB, Express JS
                  <br />
                </h6>
                <br />
                <br />
                <a
                  href="https://github.com/Dilsha-thathsarani/Research-Management-Tool"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project2}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                Responsive Recipie<br />  Website
                </h4>
                <h6 className="project__text">
                  Developed by Using <br />
                  React, Reacts Hooks 
                  <br />
                  SASS
                </h6>
                <br />
                <a
                  href="https://github.com/Dilsha-thathsarani/food-app"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project3}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Waste Management System</h4>
                <h6 className="project__text">
                  Develop by Using <br />
                  Mern Stack
                </h6>
                <br />
                <a
                  href="https://github.com/Dulanjana9914/ITP-Waste-Management-System"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project4}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Donation Website</h4>
                <h6 className="project__text">
                  Develop by using HTML <br />
                  JavaScript, CSS
                </h6>
                <br />
                <a
                  href="https://github.com/Dilsha-thathsarani/Donation"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project5}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Online App Store</h4>
                <h6 className="project__text">
                  HTML, CSS, JavaScript,
                  <br /> PHP, PHP My Admin
                  <br />
                  <br />
                  An E-commerce website 
                 

                </h6>
                <br />
                {/* <a
                  href=""
                  className="project__btn"
                >
                  View Project
                </a> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project6}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                 BookMark Android MobileApp
                </h4>
                <h6 className="project__text">
                  Android Studio Java <br />
                  FireBase Database
                </h6>
                <br />
                <a
                  href="https://github.com/Dilsha-thathsarani/MAD_complete"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project7}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Fitness App</h4>
                <h6 className="project__text">
                 Devlop by using <br />Figma
                </h6>
                <br />
                <a
                  href="https://www.behance.net/gallery/141967205/Fitness-App"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project8}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Bonsai Plant App</h4>
                <h6 className="project__text">
                  Develop by using <br />
                  Figma
                </h6>
                <br />
                <a
                  href="https://www.behance.net/gallery/141967763/Bonsai-Plant-App"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project6}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Shopping Cart </h4>
                <h6 className="project__text">
                  Develop by Using <br />
                  KoaJS,NodeJS,ReactJS
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Shopping_Cart_KoaJS"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
