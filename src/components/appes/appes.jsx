import "./appes.css";

import appes1 from "../../image/appes/Airbnb Logo.png";
import appes2 from "../../image/appes/FedEx Logo.png";
import appes3 from "../../image/appes/Google Logo.png";
import appes4 from "../../image/appes/Hubspot Logo.png";
import appes5 from "../../image/appes/Microsoft Logo.png";
import appes6 from "../../image/appes/Walmart Logo.png";

const Appes = () => {
  return (
    <section className="appes">
      <div className="appes__container">
        <div className="appes__content">
          <img src={appes1} alt="" />
          <img src={appes2} alt="" />
          <img src={appes3} alt="" />
          <img src={appes4} alt="" />
          <img src={appes5} alt="" />
          <img src={appes6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Appes;
