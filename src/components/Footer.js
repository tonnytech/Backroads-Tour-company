import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="sectin footer">
        {/* footer-links */}
        <ul className="footer-links">
          {/* singel link */}
          <li>
            <a href="#home" className="footer-link scroll-link">
              home
            </a>
          </li>
          {/* singel link */}
          {/* singel link */}
          <li>
            <a href="#about" className="footer-link scroll-link">
              about
            </a>
          </li>
          {/* singel link */}
          {/* singel link */}
          <li>
            <a href="#services" className="footer-link scroll-link">
              services
            </a>
          </li>
          {/* singel link */}
          {/* singel link */}
          <li>
            <a href="#featured" className="footer-link scroll-link">
              featured
            </a>
          </li>
          {/* singel link */}
          {/* singel link */}
          <li>
            <a href="#gallery" className="footer-link scroll-link">
              gallery
            </a>
          </li>
          {/* singel link */}
        </ul>
        {/* end of footer link */}
        {/* footer icons */}
        <ul className="footer-icons">
          {/* single icon */}
          <li>
            <a
              href="https://www.twitter.com"
              target="blank"
              className="footer-icon"
            >
                <i className="fab fa-facebook"></i>
            </a>
          </li>
          {/* end of single icon */}
                   {/* single icon */}
                   <li>
            <a
              href="https://www.twitter.com"
              target="blank"
              className="footer-icon"
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
              className="footer-icon"
            >
                <i className="fab fa-squarespace"></i>
            </a>
          </li>
          {/* end of single icon */}
        </ul>
        {/* end of footer icons */}
        <p className="copyright">
            copyright &copy; backroads tour compay <span>2023</span> All rights preserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
