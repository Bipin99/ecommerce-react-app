
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Auth.scss';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="auth-container">
      <div className="auth-box">
        {isLogin ? <Login  /> : <Signup  setIsLogin={setIsLogin}/>}
        <p className="switch-auth">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
