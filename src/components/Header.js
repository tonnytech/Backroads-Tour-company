import React from "react";

const Header = () => {
  return (
    <>
      <header id="home">
        {/* nav bar */}
        {/* hero */}
        <div className="hero">
          <div className="hero-banner">
            <h1>Continue expoloring</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="featrued" className="btn hero-btn scroll-link">
              explore tours
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
