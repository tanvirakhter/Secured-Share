// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <footer className="App-footer">
        <p>&copy; 2024 Tanvir Akhter Shakib</p>
      </footer>
    </div>
  );
};

export default Signup;
