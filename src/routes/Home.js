import { useState, useEffect } from "react";
import Character from "../components/Character";
import styles from "../style/home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <div className={styles.header}>
            <h1>Marvelous React</h1>
          </div>

          <div className={styles.card}>
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
