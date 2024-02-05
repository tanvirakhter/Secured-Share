// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/Users/tanvirakhtershakib/secure-share/src/components/style/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <Link to="/profile-update">
        <button>Login</button>
      </Link>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      <p>
        Forgot your password? <Link to="/forget-password">Reset Password</Link>
      </p>
      <footer className="App-footer">
        <p>&copy; 2024 Tanvir Akhter Shakib</p>
      </footer>
    </div>
  );
};

export default Login;
