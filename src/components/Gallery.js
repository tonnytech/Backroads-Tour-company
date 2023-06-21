import React from "react";
import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <div className="gallery-center">
          {/* single item */}
          <article className="gallery-img-container">
            <img src={tour1} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour2} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour3} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour4} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour5} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour6} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour1} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
           {/* single item */}
           <article className="gallery-img-container">
            <img src={tour2} alt="tour1" className="gallery-img" />
            <a href="#" className="gallery-icon">
              <i className="fas fa-search"></i>
            </a>
          </article>
          {/* end of single item */}
        </div>
      </section>
    </>
  );
};

export default Gallery;
