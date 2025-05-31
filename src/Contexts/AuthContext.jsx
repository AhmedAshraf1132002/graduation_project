import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(() => {
    // Initialize state from localStorage if available
    const savedToken = localStorage.getItem("userToken");
    return savedToken ? JSON.parse(savedToken) : null;
  });

  // Sync userToken changes to localStorage
  useEffect(() => {
    if (userToken) {
      localStorage.setItem("userToken", JSON.stringify(userToken));
    } else {
      localStorage.removeItem("userToken");
    }
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}
