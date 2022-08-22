import React from "react";
import { EmployerRegister } from "../components/EmployerRegister";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer"

export const RegisterEmployer = () => {
    return(
        <>
        <Navbar/>

        <EmployerRegister/>
        <Footer/>
        </>

    ) 
}