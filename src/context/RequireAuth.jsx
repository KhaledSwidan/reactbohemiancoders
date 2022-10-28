// rules for authentications;
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const RequireAuth = ({ children }) =>
{
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) <Navigate to="/login" state={{ path: location.pathname }} />

  return children;
};