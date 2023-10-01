import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface PrivateRouterProps {
  children: React.ReactNode;
}

const UserPrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const isAuth: boolean = useSelector((store:any)=>store.authReducer.isAuth);

  return <div>{isAuth ? children : <Navigate to="/" />}</div>;
};

export default UserPrivateRouter;