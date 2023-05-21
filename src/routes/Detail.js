import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailCharater from "../components/DetailCharacter";

function Detail() {
  // character의 json정보를 가져와서 저장하는 useState
  const [character, setCharacter] = useState([]);
  // 현재 URL의 id 매개변수를 추출하여 컴포넌트 내에서 사용할 수 있게 함
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
