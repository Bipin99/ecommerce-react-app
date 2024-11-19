
import React from 'react';
import { useCart } from '../context/useCart';
import CartItem from '../components/CartItem';
import '../Styles/CartPage.css';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, clearCart } = useCart();

  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const proceedToCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    } else {
      alert('Your cart is empty!');
    }
  };
  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: <strong>{totalItems}</strong></p>
            <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
          </div>
          <div className="cart-items">
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <br/>
          <button onClick={proceedToCheckout} className="checkout-btn">
        Proceed to Checkout
      </button>
          </div>
       
        </>
      )}
    </div>
  );
};

export default CartPage;
