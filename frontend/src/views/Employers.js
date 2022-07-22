import React from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../components/Context/context.js";
import { EmployersComponent } from "../components/EmployersComponent.jsx";

export const Employers = () =>{
  const { isLoggedIn, isDev} = React.useContext(MyContext);

  console.log("EmployersComponent")


     return !isLoggedIn ? <Navigate to="/login" /> : !isDev ?<EmployersComponent />: <Navigate to="/developers"/>

}