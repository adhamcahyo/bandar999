import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import Profil from './components/Profil';
import GameSelection from './components/GameSelection';
import DepositWithdraw from './components/DepositWithdraw';
import DepositHistory from './components/DepositHistory';
import WithdrawHistory from './components/WithdrawHistory';
import BetHistory from './components/BetHistory';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profil" component={Profil} />
          <Route path="/pilih-permainan" component={GameSelection} />
          <Route path="/deposit-withdraw" component={DepositWithdraw} />
          <Route path="/riwayat-deposit" component={DepositHistory} />
          <Route path="/riwayat-withdraw" component={WithdrawHistory} />
          <Route path="/riwayat-taruhan" component={BetHistory} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home-page" component={HomePage} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
