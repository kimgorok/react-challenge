import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/character.module.css";

function Character({ id, img, name }) {
  return (
    <div>
      <Link to={`/character/${id}`}>
        <img src={img} alt={name} className={styles.main_img} />
        <h2 className={styles.title}>{name}</h2>
      </Link>
    </div>
  );
}

Character.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
