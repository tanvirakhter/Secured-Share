// src/components/AdminPanel/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from './UserService';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the user list upon component mount
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <h3>User List:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
