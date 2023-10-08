import "./customers.css";

import cus1 from "../../image/customers/01.png";
import cus2 from "../../image/customers/02.png";
import cus3 from "../../image/customers/03.png";

import CustomersCard from "./customersCard/customersCard";

const Customers = () => {
  return (
    <section className="customers">
      <div className="customers__container">
        <div className="customers__content">
          <div className="customers__title title">
            Real Stories from Real Customers
          </div>

          <div className="customers__subtitle">
            Get inspired by these stories.
          </div>

          <div className="customers__items">
            <div className="customers__item__left">
              <CustomersCard
                img={cus3}
                text="To quickly start my startup landing page design, 
                I was looking for a landing page UI Kit. 
                Landify is one of the best landing page UI kit I have come across. 
                It’s so flexible, well organised and easily editable."
                name="Floyd Miles"
                muted="Vice President, GoPro"
              />
            </div>

            <div className="customers__item__right">
              <CustomersCard
                img={cus2}
                text="I used landify and created a landing page for my startup within a week. 
                The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                name="Jane Cooper"
                muted="CEO, Airbnb"
              />
              <CustomersCard
                img={cus1}
                text="Landify saved our time in designing my company page."
                name="Kristin Watson"
                muted="Co-Founder, BookMyShow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
