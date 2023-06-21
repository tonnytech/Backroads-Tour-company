import React from "react";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        {/* section title */}
        <div className="section-title">
          <h2>
            Our <span>services</span>
          </h2>
        </div>
        {/* end of section title */}
        <div className="section-center services-center">
          {/* single service */}
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-wallet fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">saving money</h4>
              <p className="service-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </article>
          {/* end of single service */}
          {/* single service */}
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-tree fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Endless biking</h4>
              <p className="service-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </article>
          {/* end of single service */}
          {/* single service */}
          <article className="service">
            <span className="service-icon">
              <i className="fas fa-socks fa-fw"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </article>
          {/* end of single service */}
        </div>
      </section>
    </>
  );
};

export default Services;
