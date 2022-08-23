import React from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../components/Context/context.js";
import { DevelopersComponent } from "../components/DevelopersComponent.jsx";
import { Navbar } from "../components/Navbar.jsx";


export const Developers = () => {
  const {  isLoggedIn, isDev} = React.useContext(MyContext);
  // const [developerData, setDeveloperData] = React.useState("");


  return !isLoggedIn ? <Navigate to="/login" /> : isDev ?<DevelopersComponent />: <Navigate to="/employers"/>
 

};
