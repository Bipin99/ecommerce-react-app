import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';  
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../Styles/ProfilePage.css'
const ProfilePage = () => {
  const { user } = useAuth(); 
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    if (user) {
     
      setProfile({ name: user.displayName, email: user.email });

 
      const fetchOrders = async () => {
        const q = query(collection(db, 'orders'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        
        const orderList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(orderList);
      };
      fetchOrders();
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <div className="profile-card">
            <h3>{profile?.name}</h3>
            <p>{profile?.email}</p>
          </div>
        </div>
      </div>

      <div className="orders-section">
        <h3>Order History</h3>
        {orders.length > 0 ? (
          <div className="order-cards">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-details">
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                  <p><strong>Total:</strong> ${order.total}</p>
                  <p><strong>Items:</strong> {order.items.map(item => item.name).join(', ')}</p>
                </div>
                <div className="order-status">
                  <button className="btn-view">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
