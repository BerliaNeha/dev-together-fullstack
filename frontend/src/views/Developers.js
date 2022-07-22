import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD
=======
import { MyContext } from "../components/Context/context.js";
>>>>>>> b301bf666133fb6d6c3b1ec322614b02de9bd192
import { DevelopersComponent } from "../components/DevelopersComponent.jsx";


export const Developers = () => {
  const {  isLoggedIn, isDev} = React.useContext(MyContext);
  // const [developerData, setDeveloperData] = React.useState("");


  return !isLoggedIn ? <Navigate to="/login" /> : isDev ?<DevelopersComponent />: <Navigate to="/employers"/>


};
