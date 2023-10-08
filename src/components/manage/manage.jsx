import "./manage.css";

import iphone01 from "../../image/manage/iPhone01.png";
import iphone02 from "../../image/manage/iPhone02.png";
import app from "../../image/header/App Store Badge.png";
import app2 from "../../image/header/Google Play Badge.png";

const Manage = () => {
  return (
    <section className="manage">
      <div className="manage__container">
        <div className="manage__content">
          <div className="manage__text">
            <div className="manage__title title">
              Manage your projects from your mobile
            </div>
            <div className="manage__subtitle">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </div>

            <div className="manage__app">
              <div className="app__title">Get the App</div>

              <div className="app__img">
                <img src={app} alt="" />
                <img src={app2} alt="" />
              </div>
            </div>
          </div>

          <div className="manage__mobile">
            <img src={iphone01} className="iphone iphone1" alt="" />
            <img src={iphone02} className="iphone iphone2" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manage;
