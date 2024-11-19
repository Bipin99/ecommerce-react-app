
import React from 'react';
import { useCart } from '../context/useCart';
import '../Styles/CartPage.css'

const CartItem = ({ product }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product.name}</h3>
        <p className="cart-item-price">${product.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button
            className="quantity-btn decrement"
            onClick={() => decrementQuantity(product.id)}
          >
            -
          </button>
          <span className="quantity-value">{product.quantity}</span>
          <button
            className="quantity-btn increment"
            onClick={() => incrementQuantity(product.id)}
          >
            +
          </button>
        </div>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
