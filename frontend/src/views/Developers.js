import React from "react";
import { Navigate } from "react-router-dom";
import { DevelopersComponent } from "../components/DevelopersComponent.jsx";

export const Developers = ({isLoggedIn}) =>{
    return !isLoggedIn ? (
        <Navigate to="/login" />
      ) : <DevelopersComponent/>

}