import React from 'react';
import './GameListPage.css';

const GameListPage = () => {
  const games = [
    { name: 'Slot Game', provider: 'Pragmatic Play' },
    { name: 'Blackjack', provider: 'Evolution Gaming' },
    { name: 'Roulette', provider: 'NetEnt' },
    // Tambahkan daftar permainan lainnya sesuai kebutuhan
  ];

  return (
    <div className="game-list-page">
      <h1>Game List</h1>
      <div className="game-cards">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <h2>{game.name}</h2>
            <p>Provider: {game.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameListPage;
