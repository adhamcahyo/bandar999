import React, { useState } from 'react';
import './DepositWithdraw.css';
const DepositWithdraw = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses deposit menggunakan data depositAmount
    console.log(`Deposit: ${depositAmount}`);
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses withdraw menggunakan data withdrawAmount
    console.log(`Withdraw: ${withdrawAmount}`);
  };

  return (
    <div>
      <h2>Deposit dan Withdraw</h2>
      <div>
        <h3>Deposit</h3>
        <form onSubmit={handleDepositSubmit}>
          <div>
            <label>Nominal Deposit:</label>
            <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
          </div>
          <button type="submit">Deposit</button>
        </form>
      </div>
      <div>
        <h3>Withdraw</h3>
        <form onSubmit={handleWithdrawSubmit}>
          <div>
            <label>Nominal Withdraw:</label>
            <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
          </div>
          <button type="submit">Withdraw</button>
        </form>
      </div>
    </div>
  );
};

export default DepositWithdraw;
