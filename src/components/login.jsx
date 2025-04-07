import React, { useState } from 'react';
import './AuthLogin.css'; // We'll create this CSS file for both login and signup

const Login = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Here you would typically call your authentication API
    console.log('Logging in with:', { email, password, rememberMe });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // onClose(); // Uncomment to close on successful login
    }, 1500);
  };

  return (
    <div className="auth-modal">
      <div className="auth-containerlogin">
      <button className="auth-close-btn" onClick={onClose}>
    <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
</button>

        
        <div className="auth-header">
          <h2>Welcome Buddy</h2>
          <p>Log in to your HexaBeta account</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary auth-submitlogin" disabled={isLoading}>
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Log In'}
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
            Don't have an account?{' '}
            <button type="button" className="switch-link" onClick={onSwitchToSignup}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;