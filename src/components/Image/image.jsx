import styles from "./styles.module.css";

const image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <image src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default image;
