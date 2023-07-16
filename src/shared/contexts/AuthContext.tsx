import React, {createContext, useState} from 'react';
import jwt_decode from 'jwt-decode';

import { useNavigate } from 'react-router-dom';
import {loginUrl} from "../constants/endpoints";
import {sendData} from "../services/req";

export const AuthContext = createContext<any | null>(null);

type Callable = any

export interface Props {
  children: React.ReactNode;
}


export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken') as string) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken') as string) : null
  );

  const navigate = useNavigate();

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/sign-in');
  }

  const loginUser = async (email: string, password: string, success: Callable, fail: Callable) => {
    try {
      const response = await sendData(loginUrl, {email, password})
      setAuthToken(response.data.accessToken);
      setUser(jwt_decode(response.data.accessToken));
      localStorage.setItem('authToken', JSON.stringify(response.data));
      success();
    } catch (e) {
      fail();
    }
  };


  const contextData = {
    user,
    authToken,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};