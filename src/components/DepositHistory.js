import React from 'react';
import './DepositHistory.css';

const DepositHistory = ({ depositHistory }) => {
  return (
    <div className="deposit-history">
      <h2>Deposit History</h2>
      <ul>
        {depositHistory.map((history) => (
          <li key={history.id}>
            Deposit: {history.amount} (Tanggal: {history.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepositHistory;
