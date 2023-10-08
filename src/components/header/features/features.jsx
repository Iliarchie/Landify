import "./feature.css";

import fut1 from "../../../image/feature/01.png";
import fut2 from "../../../image/feature/02.png";
import fut3 from "../../../image/feature/03.png";
import fut4 from "../../../image/feature/04.png";
import fut5 from "../../../image/feature/05.png";
import fut6 from "../../../image/feature/08.png";

import FeaturesCard from "./featuresCard/featuresCard";

const Features = () => {
  return (
    <section className="feature">
      <div className="feature__container">
        <div className="feature__title title">Tailor-made features</div>
        <div className="feature__subtitle title">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </div>
        <div className="feature__content">
          <FeaturesCard
            img={fut1}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />

          <FeaturesCard
            img={fut2}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />

          <FeaturesCard
            img={fut3}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />

          <FeaturesCard
            img={fut4}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />

          <FeaturesCard
            img={fut5}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />

          <FeaturesCard
            img={fut6}
            title="Robust workflow"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
