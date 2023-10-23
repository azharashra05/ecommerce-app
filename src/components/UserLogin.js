import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../UserLogin.css'

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const hardcodedCredentials = {
    email: 'test@example.com',
    password: 'password123',
  };

  if (formData.email === hardcodedCredentials.email && formData.password === hardcodedCredentials.password) {
    alert('Login successful!');
    navigate('/')
  } else {
    alert('Invalid email or password. Please try again.');
  }
};
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default UserLogin;