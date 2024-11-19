import React, { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase'; 
import { useAuth } from '../context/useAuth';

const OrderHistoryPage = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser) {
        const q = query(
          collection(db, 'orders'),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const fetchedOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(fetchedOrders);
      }
    };
    fetchOrders();
  }, [currentUser]);

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <h3>Order #{order.id}</h3>
          <p>Date: {new Date(order.date).toLocaleString()}</p>
          <p>Total: ${order.total}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryPage;
