import React, { useState } from 'react';

const GameSelection = () => {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  return (
    <div>
      <h2>Pilih Permainan</h2>
      <div>
        <label>Pilih Permainan:</label>
        <select value={selectedGame} onChange={handleGameChange}>
          <option value="">-- Pilih Permainan --</option>
          <option value="Slot">Slot</option>
          <option value="Roulette">Roulette</option>
          <option value="Blackjack">Blackjack</option>
          {/* Tambahkan opsi permainan lainnya sesuai kebutuhan */}
        </select>
      </div>
    </div>
  );
};

export default GameSelection;
