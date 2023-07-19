import React, { useState, useEffect } from 'react';
import './Profil.css';
const Profil = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    bankName: '',
    bankAccountNumber: '',
    eWalletType: '',
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // const response = await fetch(URL_API);
      const response = await fetch('http://localhost:3000/api/user-data');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="profil-container"> 
      <h2>Profil</h2>
      <div className="profil-field"> 
        <label>Nama Lengkap:</label>
        <input type="text" value={userData.fullName} readOnly />
      </div>
      <div className="profil-field">
        <label>Username:</label>
        <input type="text" value={userData.username} readOnly />
      </div>
      <div className="profil-field">
        <label>Email:</label>
        <input type="email" value={userData.email} readOnly />
      </div>
      <div className="profil-field">
        <label>No HP:</label>
        <input type="tel" value={userData.phoneNumber} readOnly />
      </div>
      <div className="profil-field">
        <label>Bank:</label>
        <input type="text" value={userData.bankName} readOnly />
      </div>
      <div className="profil-field">
        <label>No Rekening:</label>
        <input type="text" value={userData.bankAccountNumber} readOnly />
      </div>
      <div className="profil-field">
        <label>E-Wallet:</label>
        <input type="text" value={userData.eWalletType} readOnly />
      </div>
      <button className="profil-save-button">Simpan Profil</button> {/* Gunakan kelas profil-save-button */}
    </div>
  );
};

export default Profil;
