import React from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../components/Context/context.js";
import { DevelopersComponent } from "../components/DevelopersComponent.jsx";



export const Developers = () => {
  const {  isLoggedIn, isDev} = React.useContext(MyContext);
  return !isLoggedIn ? <Navigate to="/login" /> : isDev ?<DevelopersComponent />: <Navigate to="/employers"/>
 

};
