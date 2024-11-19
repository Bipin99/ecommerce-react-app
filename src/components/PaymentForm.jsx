

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'; // Import the CSS file for styling

const PaymentForm = ({ onSuccess, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    setLoading(false);

    if (!error) {
      console.log('Payment Success:', paymentMethod);
      onSuccess(paymentMethod);
    } else {
      console.error('Payment Error:', error);
      setErrorMessage(error.message || 'Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <form onSubmit={handlePayment} className="payment-form">
        <h3 className="payment-title">Payment Details</h3>
        <p className="payment-amount">Total: ${amount}</p>
        {errorMessage && <div className="payment-error">{errorMessage}</div>}
        <CardElement
          className="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                fontFamily: 'Arial, sans-serif',
                '::placeholder': {
                  color: '#9b9b9b',
                },
              },
              invalid: {
                color: '#e5424d',
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`submit-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
