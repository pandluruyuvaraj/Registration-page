import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    if (!formData.Repassword.trim() != !formData.password.trim()){
      errors.RePassword = 'Both paswords are not same please correct it'
      isValid =false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // You can send the form data to your server here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label><br/>
          <input
            type="text"
            name="username"
            placeholder='Enter your Username'
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label><br/>
          <input
            type="email"
            name="email"
            placeholder='Enter your Email'
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label><br/>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder='Enter your secret password'
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}Password
          </span>
        </div>
        <div className="form-group">
          <label>Re-enter Password:</label><br/>
          <input
            type={showRePassword ? 'text' : 'password'}
            name="Repassword"
            placeholder='Enter your secret Re-enter password'
            value={formData.Repassword}
            onChange={handleChange}
          />
          {formErrors.password && <span className="error">{formErrors.Repassword}</span>}
          <span className="password-toggle" onClick={() => setShowRePassword(!showRePassword)}>
            {showRePassword ? 'Hide' : 'Show'}Password
          </span>
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
      <h2>OR</h2>
      </div>
      <div>
      <button className='login-btn' type="submit">Login</button>
      </div>
    </div>
  );
}

export default App;

