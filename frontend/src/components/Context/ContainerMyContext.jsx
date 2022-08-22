import React, { useState } from "react";
import { MyContext } from "./context";

export default function ContainerMyContext({ children }) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");
  const [role, setRole] = React.useState();
  const [isDev, setIsDev] = React.useState(true);
  const [ token, setToken ] = useState(false);
  const [jobId, setJobId] = React.useState("");
  

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
        setJobId,
        jobId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
