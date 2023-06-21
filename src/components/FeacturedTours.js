import React from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from '../images/tour-3.jpeg';
import tour4 from "../images/tour-4.jpeg"
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

const FeacturedTours = () => {
  return (
    <>
      <section className="section" id="featured">
        {/* section title */}
        <div className="section-title">
          <h2>
            feactured <span>tours</span>
          </h2>
        </div>
        {/* end of section title */}
        {/* featured center */}
        <div className="section-center featured-center">
          {/* sigle tour */}
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour1} alt="" className="tour-img" />
              <p className="tour-date">August 26th 2023</p>
            </div>
            {/* tour info */}
            <div className="tour-info">
              <h4>tibet adventure</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="tour-footer">
                <p>
                    <span>
                        <i className="fas fa-map"></i>
                        China
                    </span>
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </article>
          {/* end of single tour */}
          {/* sigle tour */}
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour2} alt="" className="tour-img" />
              <p className="tour-date">October 1st 2023</p>
            </div>
            {/* tour info */}
            <div className="tour-info">
              <h4>best of java</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="tour-footer">
                <p>
                    <span>
                        <i className="fas fa-map"></i>
                        Indonesia
                    </span>
                </p>
                <p>11 days</p>
                <p>from $2400</p>
              </div>
            </div>
          </article>
          {/* end of single tour */}
          {/* sigle tour */}
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour3} alt="" className="tour-img" />
              <p className="tour-date">Sembteber 15thth 2023</p>
            </div>
            {/* tour info */}
            <div className="tour-info">
              <h4>Explore hong kong</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="tour-footer">
                <p>
                    <span>
                        <i className="fas fa-map"></i>
                        Hong kong
                    </span>
                </p>
                <p>8 days</p>
                <p>from $4300</p>
              </div>
            </div>
          </article>
          {/* end of single tour */}
          {/* sigle tour */}
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour4} alt="" className="tour-img" />
              <p className="tour-date">December 5th 2023</p>
            </div>
            {/* tour info */}
            <div className="tour-info">
              <h4>kenya higligts</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="tour-footer">
                <p>
                    <span>
                        <i className="fas fa-map"></i>
                        Kenya
                    </span>
                </p>
                <p>20 days</p>
                <p>from $7100</p>
              </div>
            </div>
          </article>
          {/* end of single tour */}
        </div>
        <div className="tour-btn">
            <a href="#" className="btn">all tours</a>
        </div>
      </section>
    </>
  );
};

export default FeacturedTours;
