import React, { useEffect, useState } from 'react';

const Exchanges = () => {
    let url = "https://api.coingecko.com/api/v3/exchanges";
    const [coin, setcoin] = useState([])
    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => setcoin(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [])

    return (
        <div className='main'>
            <div className='container d-flex flex-wrap'>
                {coin.length === 0 ? (<div className='loading'><div id='effect' className='display'></div></div>) : (
                    coin.map((data, index) => (
                        <div
                            key={index}
                            className='product-card'
                            onClick={() => window.open(data.url, '_blank')}
                        >
                            <img src={data.image} alt="Image description" />
                            <h4>{index + 1}</h4>
                            <h5>{data.name}</h5>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Exchanges