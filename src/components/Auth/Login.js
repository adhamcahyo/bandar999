import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import API from 'E:/project/bandar999/src/services/api';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.login(username, password);

      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/dashboard'); // Use navigate without .push()
      } else {
        alert('Username atau password salah. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi masalah saat melakukan login. Silakan coba lagi.');
    }
  };

  const Navbar = () => {
    return (
      <nav>
        <Link to="/">Bandar 999</Link>
      </nav>
    );
  };

  return (
    <div className="login-container">
      <Navbar /> {/* Render the Navbar component */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password</Link> {/* Add Forgot Password link */}
        </div>
      </form>
    </div>
  );
};

export default Login;
