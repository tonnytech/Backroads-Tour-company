import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [classes, setClasses] = useState(false);

  let toggleClass;
  if (classes) {
    toggleClass = "nav-links show-links";
  } else {
    toggleClass = "nav-links";
  }

  const toggleNav = () => {
    setClasses(!classes);
  };

  //smooth scroll javasript

  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach((link)=> {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = e.target.getAttribute('href').slice(1);
      
      const element = document.getElementById(id);
      let position = element.offsetTop - 62;


      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      })
    })
  })



  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          {/* nav header */}
          <div className="nav-header" onClick={toggleNav}>
            <img src={logo} alt="logo" className="nav-logo" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* end of nav header */}
          {/* footer-links */}
          <ul className={`${toggleClass}`} id="nav-links">
            {/* singel link */}
            <li>
              <a
                href="#home"
                className="nav-link scroll-link"
                onClick={toggleNav}
              >
                home
              </a>
            </li>
            {/* singel link */}
            {/* singel link */}
            <li>
              <a
                href="#about"
                className="nav-link scroll-link"
                onClick={toggleNav}
              >
                about
              </a>
            </li>
            {/* singel link */}
            {/* singel link */}
            <li>
              <a
                href="#services"
                className="nav-link scroll-link"
                onClick={toggleNav}
              >
                services
              </a>
            </li>
            {/* singel link */}
            {/* singel link */}
            <li>
              <a
                href="#featured"
                className="nav-link scroll-link"
                onClick={toggleNav}
              >
                featured
              </a>
            </li>
            {/* singel link */}
            {/* singel link */}
            <li>
              <a
                href="#gallery"
                className="nav-link scroll-link"
                onClick={toggleNav}
              >
                gallery
              </a>
            </li>
            {/* singel link */}
          </ul>
          {/* end of footer link */}
          {/* nav icons */}
          <ul className="nav-icons">
            {/* single icon */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            {/* end of single icon */}
            {/* single icon */}
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            {/* end of single icon */}
            {/* single icon */}
            <li>
              <a
                href="https://www.twitter.com"
                target="blank"
                className="nav-icon"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            {/* end of single icon */}
          </ul>
          {/* end of nav icons */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
