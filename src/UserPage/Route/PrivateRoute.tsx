import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouterProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const auth: boolean = false;

  return <div>{auth ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;