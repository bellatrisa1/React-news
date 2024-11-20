import { formatTime } from '../../helpers/formatTime';
import styles from ".";

const News = ({item}) => {
  return (
    <div className={styles.news}>
      <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.extra}>{formatTime(item.published)} by {item.author}</p>
    </div>
  );
};

export default News;
