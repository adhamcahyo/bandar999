// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isProvidersVisible, setProvidersVisible] = useState(false);

  const providersList = [
    'Playtech',
    'Microgaming',
    'NetEnt',
    'Evolution Gaming',
    'IGT',
    'Betsoft',
    'Pragmatic Play',
    'Yggdrasil',
    'Quickspin',
    'Thunderkick',
  ];

  const handleProvidersToggle = () => {
    setProvidersVisible(!isProvidersVisible);
  };

  const randomUsername = generateRandomName();
  const randomAmount = generateRandomAmount();

  return (
    <div className="home-page">
      <div className="header">
        <h1>Welcome to Bandar999 Casino</h1>
        <p>Maxwin Sak Pole</p>
      </div>

      <nav className="top-navigation">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      <div className="announcement">
        <marquee behavior="scroll" direction="left">
          Selamat untuk {randomUsername} telah {generateRandomAction()} dengan nominal (Rp. {randomAmount})
        </marquee>
      </div>

      <div className="game-providers">
        <h2>10 Providers and Games</h2>
        <p>
        Temukan permainan seru dan menarik dari berbagai provider terkemuka. Nikmati pengalaman bermain yang tak terlupakan dan raih kemenangan besar.
        </p>
        <button className="providers-button" onClick={handleProvidersToggle}>
          {isProvidersVisible ? 'Hide Providers' : 'Show Providers'}
        </button>
        {isProvidersVisible && (
          <ul>
            {providersList.map((provider, index) => (
              <li key={index}>{provider}</li>
            ))}
          </ul>
        )}
      </div>

      <nav className="bottom-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/games">Games</a></li>
          <li><a href="/promotions">Promotions</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <footer>
        &copy; {new Date().getFullYear()} Bandar999 Casino. All rights reserved.
      </footer>
    </div>
  );
};

function generateRandomName() {
  const names = ['@maxxpro', '@adhamm', '@cipung29', '@merkavatnak', '@apaluliat2wkwk'];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomAction() {
  const actions = ['menang', 'sukses withdraw', 'maxwin'];
  return actions[Math.floor(Math.random() * actions.length)];
}

function generateRandomAmount() {
  const amount = Math.floor(Math.random() * 100000) + 10000;
  return amount.toLocaleString();
}

export default HomePage;
