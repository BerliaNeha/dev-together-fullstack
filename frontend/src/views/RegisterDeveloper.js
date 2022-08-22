import React from "react";
import { DeveloperRegister } from "../components/DeveloperRegister";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const RegisterDeveloper = () => {
    return (
    <>
   
    <Navbar/> 
     <DeveloperRegister/> 
     <Footer/>
    </>
    
    )
}