import React from 'react';
import './WithdrawHistory.css';

const WithdrawHistory = ({ withdrawHistory }) => {
  return (
    <div className="withdraw-history">
      <h2>Withdraw History</h2>
      <ul>
        {withdrawHistory.map((history) => (
          <li key={history.id}>
            Withdraw: {history.amount} (Tanggal: {history.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithdrawHistory;
