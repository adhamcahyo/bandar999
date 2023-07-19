import React from 'react';

const History = () => {
  // Buat data riwayat deposit dan withdraw (contoh sederhana)
  const depositHistory = [
    { id: 1, amount: 100, date: '2023-07-01' },
    { id: 2, amount: 200, date: '2023-07-03' },
  ];

  const withdrawHistory = [
    { id: 1, amount: 50, date: '2023-07-02' },
    { id: 2, amount: 75, date: '2023-07-04' },
  ];

  return (
    <div>
      <h2>Riwayat Deposit</h2>
      <ul>
        {depositHistory.map((history) => (
          <li key={history.id}>Deposit: {history.amount} (Tanggal: {history.date})</li>
        ))}
      </ul>
      <h2>Riwayat Withdraw</h2>
      <ul>
        {withdrawHistory.map((history) => (
          <li key={history.id}>Withdraw: {history.amount} (Tanggal: {history.date})</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
