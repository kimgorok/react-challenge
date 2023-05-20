import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/detailcharacter.module.css";

function DetailCharater({ img, name, description, series, urls }) {
  return (
    <div>
      <div className={styles.header}>
        <Link to={`/`}>
          <h1>메인 화면으로</h1>
        </Link>
      </div>
      <div className={styles.dc_container}>
        <img src={img} alt={name} className={styles.image} />
        <h1 className={styles.cName}>{name}</h1>
        <p className={styles.description}>
          DESCRIPTION :
          {description === "" ? " There is no description " : description}
        </p>
        <ul className={styles.series}>
          <h1>SERIES</h1>
          {series.items.map((series) => (
            <li key={Math.random()}>{series.name}</li>
          ))}
        </ul>
        <ul className={styles.detail}>
          <h1>↓More Details ↓</h1>
          {urls.map((detail) => (
            <li key={Math.random()}>
              {detail.type} : <a href={detail.url}>{detail.url}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

DetailCharater.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  series: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DetailCharater;
