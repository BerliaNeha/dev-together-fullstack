import React, { useState } from "react";
import { MyContext } from "./context";

export default function Container({ children }) {

  const roles = {
    GUEST: "guest",
    DEVELOPER: "developer",
    EMPLOYER: "employer"
  } 

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");
  const [role, setRole] = React.useState();
  const [isDev, setIsDev] = React.useState(true);
  const [ token, setToken ] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUserId,
        setCurrentUserId,
        isDev,
        setIsDev,
        token,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
