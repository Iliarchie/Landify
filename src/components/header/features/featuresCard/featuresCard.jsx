import styles from "./featuresCard.module.css";

const FeaturesCard = (props) => {
  return (
    <div className={styles.feature__item}>
      <img src={props.img} alt="" />
      <div className={styles.feature__item__title}>{props.title}</div>
      <div className={styles.feature__item__subtitle}>{props.subtitle}</div>
    </div>
  );
};

export default FeaturesCard;
