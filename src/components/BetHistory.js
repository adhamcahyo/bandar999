import React from 'react';
import './BetHistory.css';

const BetHistory = ({ betHistory }) => {
  return (
    <div className="bet-history">
      <h2>Bet History</h2>
      <ul>
        {betHistory.map((history) => (
          <li key={history.id}>
            Bet: {history.amount} (Tanggal: {history.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BetHistory;
