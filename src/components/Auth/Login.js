// src/components/LoginSignup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleSignup = () => {
    console.log('Signing up with:', { username, email, password });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        {!isLogin && (
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        )}
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {isLogin ? (
          <button type="button" onClick={handleLogin}>Login</button>
        ) : (
          <button type="button" onClick={handleSignup}>Signup</button>
        )}
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={handleToggle}>{isLogin ? 'Signup' : 'Login'}</button>
      </p>
      <footer className="App-footer">
        <p>&copy; 2024 Tanvir Akhter Shakib</p>
      </footer>
    </div>
  );
};

export default LoginSignup;
