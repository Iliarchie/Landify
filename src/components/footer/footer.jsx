import "./footer.css";

import logo from "../../image/header/Dark.png";
import app from "../../image/header/App Store Badge.png";
import app2 from "../../image/header/Google Play Badge.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <a href="#!" className="logo">
              <img src={logo} alt="" />
            </a>

            <div className="footer__download">
              <a href="#!">Download Now</a>
              <a href="#!">License</a>
            </div>

            <div className="footer__about">
              <a href="#!">About</a>
              <a href="#!">Features</a>
              <a href="#!">Pricing</a>
              <a href="#!">Careers</a>
              <a href="#!">Help</a>
              <a href="#!">Privacy Policy</a>
            </div>

            <div className="footer__license">
              © 2020 Landify UI Kit. All rights reserved
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__right__text">Get the App</div>

            <div className="footer__right__app">
              <img src={app} alt="" />
              <img src={app2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
