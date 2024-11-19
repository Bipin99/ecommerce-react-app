import React, { useState } from 'react';
import './ShippingForm.css'
const ShippingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form">
      <h3>Shipping Information</h3>
      <input 
        name="fullName" 
        placeholder="Full Name" 
        value={formData.fullName} 
        onChange={handleChange} 
        required 
        aria-label="Full Name" 
      />
      <input 
        name="address" 
        placeholder="Address" 
        value={formData.address} 
        onChange={handleChange} 
        required 
        aria-label="Address" 
      />
      <input 
        name="city" 
        placeholder="City" 
        value={formData.city} 
        onChange={handleChange} 
        required 
        aria-label="City" 
      />
      <input 
        name="state" 
        placeholder="State" 
        value={formData.state} 
        onChange={handleChange} 
        required 
        aria-label="State" 
      />
      <input 
        name="postalCode" 
        placeholder="Postal Code" 
        value={formData.postalCode} 
        onChange={handleChange} 
        required 
        aria-label="Postal Code" 
      />
      <input 
        name="phone" 
        placeholder="Phone Number" 
        value={formData.phone} 
        onChange={handleChange} 
        required 
        aria-label="Phone Number" 
      />
      <button type="submit" className="submit-btn">Next</button>
    </form>
  );
};

export default ShippingForm;
