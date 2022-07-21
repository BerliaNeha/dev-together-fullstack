import React from "react";

import { SignIn } from "../components/SignIn.jsx";

export const Login = ({isLoggedIn, setIsLoggedIn, setCurrentUserId}) => {
  return <SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUserId={setCurrentUserId}/>;
};





