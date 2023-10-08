import styles from "./achivementCard.module.css";

const AchivementCard = (props) => {
  return (
    <div className={styles.achievement__item}>
      <img src={props.img} alt="" />

      <div className={styles.achivement__card__text}>
        <div className={styles.card__title}>{props.title}</div>
        <div className={styles.card__subtitle}>{props.subtitle}</div>
      </div>
    </div>
  );
};

export default AchivementCard;
