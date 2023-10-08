import styles from "./customersCard.module.css";

const CustomersCard = (props) => {
  return (
    <div className={styles.customers__item}>
      <img className={styles.img} src={props.img} alt="" />
      <div className={styles.customers__text}>{props.text}</div>

      <div className={styles.customers__name__text}>
        <div className={styles.text__name}>{props.name}</div>
        <div className={styles.text__muted}>{props.muted}</div>
      </div>
    </div>
  );
};

export default CustomersCard;
