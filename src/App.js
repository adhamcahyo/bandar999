import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import DashboardPage from './components/Dashboard';
import ProfilPage from './components/Profil';
import GameSelectionPage from './components/GameSelection';
import DepositWithdrawPage from './components/DepositWithdraw';
import DepositHistoryPage from './components/DepositHistory';
import WithdrawHistoryPage from './components/WithdrawHistory';
import BetHistoryPage from './components/BetHistory';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/pilih-permainan" element={<GameSelectionPage />} />
          <Route path="/deposit-withdraw" element={<DepositWithdrawPage />} />
          <Route path="/riwayat-deposit" element={<DepositHistoryPage />} />
          <Route path="/riwayat-withdraw" element={<WithdrawHistoryPage />} />
          <Route path="/riwayat-taruhan" element={<BetHistoryPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
