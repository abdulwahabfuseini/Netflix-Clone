"use client"

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (currentUser) => {
    setCurrentUser(currentUser);
  };

  const SignUp = (currentUser) => {
    setCurrentUser(currentUser);
  };
  
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, SignUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


