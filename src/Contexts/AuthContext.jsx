import { createContext, useEffect, useState } from "react";
import GetStarted from "../Components/GetStarted/GetStarted";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState("");   // el token deh el data bta3t el user bs mtshafra


  useEffect(() => {
    if (localStorage.getItem("token") != null)
       setUserToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}
