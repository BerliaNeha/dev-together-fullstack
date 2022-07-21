import React from "react";
import { Navigate } from "react-router-dom";
import { EmployersComponent } from "../components/EmployersComponent";

export const Employers = ({isLoggedIn}) =>{
    return !isLoggedIn ? (
        <Navigate to="/login" />
      ) : <EmployersComponent/>

}