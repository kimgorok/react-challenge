import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinsList, setCoinsList] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [coinPrice, setCoinPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    setFinalPrice(myMoney / coinPrice);
  };

  const onChange = (event) => {
    setMyMoney(event.target.value);
  };

  const CalCoin = (event) => {
    setCoinPrice(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinsList(json);
        setLoading(false);
        setCoinPrice(json[0].quotes.USD.price);
      });
  }, []);
  return (
    <div>
      <h1>코인 {loading ? "" : `${coinsList.length}개`} </h1>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <div>
          <h4>구매하려는 코인을 선택</h4>
          <select onChange={CalCoin} value={coinPrice}>
            {coinsList.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />

          <h2>당신의 자금은 : {myMoney} $</h2>
          <form onSubmit={onSubmit}>
            <input type="number" placeholder="자금(달러)" onChange={onChange} />
            <button>제출</button>
          </form>

          <hr />
          <h2>당신은 {finalPrice}개의 코인을 구매 가능합니다.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
