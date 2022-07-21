import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { DevelopersComponent } from "../components/DevelopersComponent";

export const Developers = ({ isLoggedIn, currentUserId, setCurrentUserId, setIsLoggedIn }) => {
  const [developerData, setDeveloperData] = React.useState("");

  useEffect (() => {

    const developers =async ()=>{
      const settings = {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + `/developers/${currentUserId}`,
        settings
      );
      const parsedRes = await response.json();
  
      try {
        if (response.ok) {
          setDeveloperData(parsedRes.jobTitle);
        } else {
       setIsLoggedIn (false)
          throw new Error(parsedRes.message);
        }
      } catch (err) {
        alert(err.message);
      }
      
    }
    developers();
   
  });

  console.log(developerData)
  return !isLoggedIn ? <Navigate to="/login" /> : <DevelopersComponent />;
};
