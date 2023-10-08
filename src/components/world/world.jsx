import "./world.css";

import world from "../../image/world/world.png";

const World = () => {
  return (
    <section className="world">
      <div className="world__container">
        <div className="world__content">
          <div className="world__text">
            <div className="text__title title">
              Enter the world of all fashion trends
            </div>
            <div className="text__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam. Consequat,
              scelerisque non tincidunt sit lectus senectus.
            </div>
          </div>

          <img className="lampa" src={world} alt="" />
        </div>
      </div>
    </section>
  );
};

export default World;
