import React from "react";
import AwesomeBeach from "../images/about.jpeg";

const About = () => {
  return (
    <>
      <section className="section" id="about">
        {/* section title */}
        <div className="section-title">
          <h2>
            About <span>Us</span>
          </h2>
        </div>
        {/* end of section title */}

        <div className="section-center about-center">
          {/* about image wrapper */}
          <article className="about-img">
            <img
              src={AwesomeBeach}
              className="about-photo"
              alt="awesome beach"
            />
          </article>
          {/* about info */}
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <a href="#" className="btn">Read more</a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
