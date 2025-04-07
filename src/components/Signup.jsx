import React, { useState } from 'react';
import './AuthRegister.css';

const Signup = ({ onClose, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Here you would typically call your signup API
    console.log('Signing up with:', { name, email, password });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // onClose(); // Uncomment to close on successful signup
    }, 1500);
  };

  return (
    <div className="auth-modal">
      <div className="auth-container">
      <button className="auth-close-btn" onClick={onClose}>
    <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
</button>
        
        <div className="auth-header">
          <h2>Create Your Account</h2>
          <p>Join HexaBeta to start building</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-row">
    <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
        />
    </div>
</div>


          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <label className="checkbox-container terms">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <span className="checkmark"></span>
            <p class="terms">
                  I agree to the 
                 <a href="#terms">Terms of Service</a> 
                  &nbsp;&nbsp;and&nbsp;&nbsp;  
                 <a href="#privacy">Privacy Policy</a>
           </p>

          </label>

          <button type="submit" className="btn btn-primary auth-submit" disabled={isLoading}>
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Create Account'}
          </button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-auth">
    <button type="button" className="btn btn-social google">
        <img src="src\assets\google_13170545.png" alt="Google Logo" className="google-icon" />
        Continue with Google
    </button>
</div>

          <div className="auth-switch">
            Already have an account?{' '}
            <button type="button" className="switch-link" onClick={onSwitchToLogin}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;