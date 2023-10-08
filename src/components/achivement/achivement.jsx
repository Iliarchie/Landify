import "./achivement.css";

import achiev1 from "../../image/stats/01.png";
import achiev2 from "../../image/stats/04.png";
import achiev3 from "../../image/stats/05.png";
import achiev4 from "../../image/stats/07.png";
import bgachiev from "../../image/stats/Mockup.png";

import AchivementCard from "./achivementCard/achivementCard";

const Achivements = () => {
  return (
    <section className="achivement">
      <div className="achivement__container">
        <div className="achivement__content">
          <div className="achivement__top">
            <div className="achivement__text">
              <div className="text__title title">
                Our 18 years of achievements
              </div>
              <div className="text__muted">
                With our super powers we have reached this
              </div>
            </div>

            <div className="achivement__items">
              <AchivementCard
                img={achiev1}
                title="10,000+"
                subtitle="Downloads per day"
              />

              <AchivementCard
                img={achiev2}
                title="2 Million"
                subtitle="Users"
              />

              <AchivementCard img={achiev3} title="500+" subtitle="Clients" />

              <AchivementCard img={achiev4} title="140" subtitle="Countries" />
            </div>
          </div>

          <div className="achivement__bottom">
            <img src={bgachiev} className="achivement__bottom__img" alt="" />

            <div className="achivement__bottom__text">
              <div className="botom__title title">Headline</div>
              <div className="botom__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </div>
              <a href="#!" className="botom__btn">
                Get started
                <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
