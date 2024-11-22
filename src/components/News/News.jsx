import styles from "./styles.module.css";
import Image from '../Image/Image';
import { formatTime } from '../../helpers/formatTime';

const News = ({ item }) => {
  return (
    <div className={styles.news}>
      <Image image={item.image} />
       <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTime(item.published)} by {item.author}
  </p>
    </div>
  );
};

export default News;
