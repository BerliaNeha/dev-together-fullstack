import React, { useEffect, useState } from "react";
import { MyContext } from "./context";

export default function ContainerMyContext({ children }) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUserId, setCurrentUserId] = React.useState("");
  const [role, setRole] = React.useState();
  const [isDev, setIsDev] = React.useState(true);
  const [ token, setToken ] = useState(false);
  const [jobId, setJobId] = React.useState("");

  const termsAcceptedLocalStorage =
    JSON.parse(localStorage.getItem("termsAccepted")) || false;
  const [termsAccepted, setTermsAccepted] = React.useState(termsAcceptedLocalStorage);

  useEffect(() => {
    localStorage.setItem("termsAccepted", JSON.stringify(termsAccepted));
  }, [termsAccepted]);

  const handleClose = () => {
    setTermsAccepted(true);
  };

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
        setToken, termsAccepted, setTermsAccepted, handleClose
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
