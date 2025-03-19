import { createContext, React, useEffect } from "react";
import { setLocalStorage } from "../utils/localStorage";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, []);

  return <div>{children}</div>;
};

export default AuthProvider;
