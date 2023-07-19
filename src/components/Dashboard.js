import React from 'react';
import './Dashboard.css';

const Dashboard = ({ username }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <div className="options">
        <a href="/profil">Konfigurasi Profil</a>
        <a href="/pilih-permainan">Pilih Permainan</a>
        <a href="/deposit-withdraw">Deposit / Withdraw</a>
        <a href="/riwayat">Riwayat Transaksi</a>
      </div>
    </div>
  );
};

export default Dashboard;
