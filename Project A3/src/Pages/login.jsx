import React, { useState } from 'react';
import '../styles/login.css'; 

function Login() {
  // State to toggle between 'login' and 'signup' mode
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for signup

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginMode) {
      alert(`Attempting to log in with: ${email}`);
    } else {
      // Basic validation for sign-up
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`Attempting to sign up with: ${email}`);
    }
    
    // Clear fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const toggleMode = () => {
    setIsLoginMode(prevMode => !prevMode);
    // Clear inputs when switching mode
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const title = isLoginMode ? 'Login to Your Account' : 'Create a New Account';
  const buttonText = isLoginMode ? 'Login' : 'Sign Up';

  return (
    <div className="login-page-wrapper"> {/* New wrapper for full-height */}
        <div className="login-container">
            <h3>{title}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                {/* 1. Conditional Rendering for Confirm Password (Sign Up only) */}
                {!isLoginMode && (
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm Password" 
                        required 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}

                <button type="submit" className="btn-pink">
                    {buttonText}
                </button>
            </form>

            {/* 2. Toggle Link/Button */}
            <p className="toggle-text">
                {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                <span onClick={toggleMode} className="toggle-link">
                    {isLoginMode ? "Sign Up here" : "Login here"}
                </span>
            </p>
        </div>
    </div>
  );
}

export default Login;