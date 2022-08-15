import React, { useState } from "react";
import { MyContext } from "./context";

export default function Container({ children }) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState("");
  const [role, setRole] = React.useState();
  const [isDev, setIsDev] = React.useState(true);
  const [ token, setToken ] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        isDev,
        setIsDev,
        token,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
