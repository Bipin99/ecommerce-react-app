
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ShippingForm from '../components/ShippingForm';
import OrderSummary from '../components/OrderSummary';
import PaymentForm from '../components/PaymentForm';
import { useCart } from '../context/useCart';
import axios from 'axios';
import { db } from '../config/firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const { user } = useAuth(); 
  console.log(user)
  
  const handleShippingSubmit = async (info) => {
    setShippingInfo(info);

    try {
      // Request PaymentIntent from backend
      const { data } = await axios.post('http://localhost:3000/create-payment-intent', {
        amount: totalPrice * 100, // Stripe accepts amount in cents
        currency: 'usd', // Adjust currency as needed
      });

      setClientSecret(data.clientSecret);
      setStep(2); 
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
      alert('Failed to create payment. Please try again.');
    }
  };

 
  const handlePaymentSuccess = async (paymentMethod) => {
    // Order details
    const order = {
      userId: user.uid,  
      items: cart,
      total: totalPrice,
      shipping: shippingInfo,
      paymentMethod: paymentMethod.id,
      date: new Date().toISOString(),
    };

    // Save order to Firestore
    try {
      await addDoc(collection(db, 'orders'), order);  
      console.log('Order saved:', order);
    } catch (error) {
      console.error('Error saving order:', error);
    }

    console.log('Order Placed:', { shippingInfo, paymentMethod, cart });
    setStep(3); 
  };

  return (
    <div className="checkout-page">
      {step === 1 && <ShippingForm onSubmit={handleShippingSubmit} />}
      {step === 2 && clientSecret && (
        <>
          <OrderSummary cart={cart} totalPrice={totalPrice} />
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm onSuccess={handlePaymentSuccess} />
          </Elements>
        </>
      )}
      {step === 3 && <h2>Thank you for your order!</h2>}
    </div>
  );
};

export default CheckoutPage;
