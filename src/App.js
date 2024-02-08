import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import ProfileUpdate from './components/Dashboard/ProfileUpdate';
import AdminLogin from './components/AdminPanel/AdminLogin';
import AdminDashboard from './components/AdminPanel/AdminDashboard';

function LandingPage() {
  return (
    <div>
        <h2>Secured Share</h2>
      <p>Share your documents in a secured way. Get your properties today.</p>
      <div>
      <Link to="/login">
        <button>Start Now</button>
      </Link>
      </div>
      <div>
        <text>Are you an admin? </text>
      <Link to="/admin-login">
        <text>Admin Login</text>
      </Link>
        <text> here.</text>
      </div>
      <footer className="App-footer">
        <p>&copy; 2024 Tanvir Akhter Shakib</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/profile-update" element={<ProfileUpdate />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
