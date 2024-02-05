// src/components/ForgetPassword.js
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Add your password reset logic here
    console.log('Resetting password for email:', email);
  };

  return (
    <div>
      <h2>Forget Password Page</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
      <footer className="App-footer">
        <p>&copy; 2024 Tanvir Akhter Shakib</p>
      </footer>
    </div>
  );
};

export default ForgetPassword;
