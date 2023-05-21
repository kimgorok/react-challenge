import { useState, useEffect } from "react";
import Character from "../components/Character";
import styles from "../style/home.module.css";

function Home() {
  // API를 가져오기 전 화면에 loading을 표시하는 useState
  const [loading, setLoading] = useState(true);
  // 가져온 json 데이터를 저장하는 character useState
  const [characters, setCharacters] = useState([]);
  // 마블 API를 가져오는 함수
  const getCharacters = async () => {
    // async await을 이용한 비 동기 프로그래밍
    // 다 가져오기전까진 로딩 보여줌
    // fetch가 비동기로 API를 반환해서 await 한 번
    // 그리고 .json()이 비동기 함수니까 await 한 번 더
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    // characters에 json.data를 저장
    setCharacters(json.data.results);
    // 다 가져왔으니까 로딩은 false로
    setLoading(false);
    console.log(json);
  };
  // useEffect를 사용해서 API를 가져오는 함수를 한번만 실행하도록 함
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles.container}>
      {/* 로딩이 true일 동안 화면에 <h1>을 표시 */}
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <div className={styles.header}>
            <h1>Marvelous React</h1>
          </div>

          <div className={styles.card}>
            {/* map을 사용해서 가져온 data(배열)에 대하여 각각 컴포넌트를 실행 */}
            {characters.map((char) => (
              <Character
                key={char.id}
                id={char.id}
                img={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                name={char.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
