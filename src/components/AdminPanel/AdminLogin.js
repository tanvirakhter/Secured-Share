// src/components/AdminPanel/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateAdmin } from './AuthService';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authenticateAdmin(username, password)) {
      // Admin authentication successful
      setError('');
      // Redirect to the admin dashboard or any other admin-related page
      navigate('/admin-dashboard');
    } else {
      // Admin authentication failed
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login Page</h2>
      <form>
        <label>
          Admin Name:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Admin Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
