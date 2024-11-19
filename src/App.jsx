// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx'
import ProductListPage from './Pages/ProductListPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import CartIcon from './components/CartIcon.jsx';
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Auth from './components/Auth/Auth.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './Pages/ProfilePage.jsx';
import './App.css'

const App = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  return (
    <AuthProvider>
    <Elements stripe={stripePromise}>
    <CartProvider>
    
      <Router>
      <header>
          <Header/>
      </header>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Product detail route */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<Auth />} />\
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route 
                path="/checkout" 
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                   
                  </ProtectedRoute>
                } 
          />
           <Route 
                path="/profilepage" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                   
                  </ProtectedRoute>
                } 
          />
        
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>

    </CartProvider>
    </Elements>
    </AuthProvider>
  );
};

export default App;
