
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../Styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    await logout();
  };

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" className="home-link">ClothHub</Link>
      </h1>
      <nav className="nav-links">
        <Link to="/" className="home-link">Home</Link>
        {user ? (
          <>
            <span className="user-greeting">Welcome, {user.displayName || 'User'}!</span>
            <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
            <Link to="/profilepage"className="sign-out-btn" >Profile</Link>
          </>
        ) : (
          <Link to="/auth" className="auth-link">Login</Link>
        )}
        <Link to="/cart" className="cart-link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
