import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data pendaftaran:', {
      fullName,
      username,
      email,
      phoneNumber,
      accountNumber,
      selectedBank,
      password,
    });

    
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        username,
        email,
        phoneNumber,
        accountNumber,
        selectedBank,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        showNotification(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
        showNotification('Failed to register. Please try again later.');
      });
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 5000);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          No Rek:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Bank:
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            required
          >
            <option value="">-- Pilih Bank --</option>
            <option value="bank1">BCA</option>
            <option value="bank2">BNI</option>
          </select>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>

      {notification && <div className="notification">{notification}</div>}

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Bandar999. All rights reserved.</p>
        <p>
          Website by <a href="/">Adham cahyo</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
