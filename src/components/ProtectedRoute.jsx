
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location.pathname }} />
  );
};
export default ProtectedRoute