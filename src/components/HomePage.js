import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Bandar999 Casino</h1>
      <p>Get ready to win the big jackpot!</p>
      <button className="play-button">Play Now</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default HomePage;
