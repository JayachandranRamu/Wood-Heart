import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface PrivateRouterProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const isAdmin: boolean = useSelector((store:any)=>store.authReducer.isAdmin);

  return <div>{isAdmin ? children : <Navigate to="/" />}</div>;
};

export default PrivateRouter;