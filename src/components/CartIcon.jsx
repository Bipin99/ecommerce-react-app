
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const CartIcon = () => {
  const { cart } = useCart(); 

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <span>🛒</span> 
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}  
      </Link>
    </div>
  );
};

export default CartIcon;
