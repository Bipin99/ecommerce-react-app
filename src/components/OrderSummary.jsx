import React from 'react';
import './OrderSummary.css'
const OrderSummary = ({ cart, totalPrice = 0 }) => {
  console.log(cart)
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="order-items">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <p className="item-name">{item.title} x {item.quantity}</p>
            <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <h4 className="order-total">Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default OrderSummary;
