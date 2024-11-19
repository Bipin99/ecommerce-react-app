
import React, { useState } from 'react';
import { signInWithGoogle } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './GoogleSignIn.css'
const GoogleSignIn = () => {
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setMessage('Login successful with Google!');
     // Redirect to home or product listing page after successful login
      navigate('/');
    } catch (error) {
      setMessage(error.message || 'An error occurred');
    }
  };

 // Redirect if already logged in
 if (user) navigate('/'); 

  return (
    <div>
    <button onClick={signInWithGoogle} className="google-signin-btn">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google logo" />
  Sign in with Google
</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GoogleSignIn;
