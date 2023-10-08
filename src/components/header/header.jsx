import logo from "../../image/header/Dark.png";
import appstore from "../../image/header/App Store Badge.png";
import playmarket from "../../image/header/Google Play Badge.png";
import iphoneImg from "../../image/header/iPhone X.png";
import bg from "../../image/header/bg.png";
import bg2 from "../../image/header/bg2.png";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={bg2} className="bgHeader2" alt="" />
      <img src={bg} className="bgHeader" alt="" />
      <div className="header__container">
        <div className="header__content">
          <div className="header__menu">
            <div className="haeder-menu__start">
              <a href="#" className="header__logo">
                <img src={logo} alt="logo" />
              </a>

              <nav className="nav">
                <ul className="navigations">
                  <li>
                    <a href="#" className="header-menu__link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header-menu__link">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header-menu__link">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header-menu__link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header-menu__link">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="header-menu__link">
                      More
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="haeder-menu__end">
              <a href="#!" className="header-menu__app">
                <img src={appstore} alt="" />
              </a>
              <a href="#!" className="header-menu__app">
                <img src={playmarket} alt="" />
              </a>
            </div>
          </div>

          <div className="header__wrapper">
            <div className="header-wrapper__text">
              <div className="header-wrapper__tite">
                Organise projects. Get more done.
              </div>
              <a href="#" className="header-wrapper__btn">
                Get Started
              </a>
            </div>

            <div className="header-wrapper__img">
              <img src={iphoneImg} className="iPhone" alt="" />
            </div>
          </div>
          <div className="header__under"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
