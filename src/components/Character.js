import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../style/character.module.css";

// Character함수에 3개의 props를 입력
// props는 컴포넌트에서 보낸 모든 것들을 갖는 오브젝트
function Character({ id, img, name }) {
  return (
    <div>
      {/* Link를 사용해서 해당 링크로 바로 이동하게 함 */}
      <Link to={`/character/${id}`}>
        <img src={img} alt={name} className={styles.main_img} />
        <h2 className={styles.title}>{name}</h2>
      </Link>
    </div>
  );
}

// 3개의 propTypes를 지정, 모두 필수
Character.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
