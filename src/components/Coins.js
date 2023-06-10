import React, { useEffect, useState } from 'react'
import CoinPages from './CoinPages';

const Coins = () => {
  const [coin, setcoin] = useState([])
  const [pageNo, setpageNo] = useState(11)
  let setHandlePage = (data) => {
    setcoin([])
    setpageNo(data)
  }

  useEffect(() => {
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNo}&sparkline=false`;
    fetch(url)
      .then((result) => result.json())
      .then((data) => setcoin(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [pageNo])
  console.log(coin)
  return (
    <>
      
      <div className='main' style={{ backgroundColor: '#030303', padding: "0 30px"}}>
        <div className='container d-flex flex-wrap'>
          {coin.length === 0 ? (<div className='loading'><div id='effect' className='display'></div></div>) : (
            coin.map((data, index) => (
              <div
                key={index}
                className='product-card'>
                <img src={data.image} />
                <h4>{data.symbol}</h4>
                <h5 style={{textAlign: 'center'}}>{data.name}</h5>
              </div>
            ))
          )}
        </div>
        <CoinPages setHandlePage={setHandlePage}  />
      </div>
    </>
  )
}

export default Coins