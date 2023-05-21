import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailCharater from "../components/DetailCharacter";

function Detail() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results);
    console.log(json);
  };
  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div>
      {character.map((dchar) => (
        <DetailCharater
          key={dchar.id}
          id={dchar.id}
          img={`${dchar.thumbnail.path}.${dchar.thumbnail.extension}`}
          name={dchar.name}
          description={dchar.description}
          series={dchar.series}
          urls={dchar.urls}
        />
      ))}
    </div>
  );
}

export default Detail;
