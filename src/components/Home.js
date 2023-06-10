import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import backgroundImage from '../images/bg.jpg';
import crypto from '../images/crypto.png';


const Home = () => {
  return (
    <>
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '95vh', 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      />
      <div className="image-container">
        <div className="text">
          <h1>Welcome to our Crypto Exchange and Coin Information Platform</h1>
          <p>Get insights into the top cryptocurrency exchanges and discover the latest coins and tokens.</p>

          <div className="buttons">
            <Link to="/exchanges">
              <Button className='btn exchange' variant="danger">Explore Exchanges</Button>
            </Link>
            <Link to="/coins">
              <Button className='btn coin' variant="danger">Explore Coins</Button>
            </Link>
          </div>
        </div>

        <img className="animated-image" src={crypto} />
        
      </div>
    </div>
    </>
  );
}

export default Home;
