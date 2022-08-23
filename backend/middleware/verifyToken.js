import createError from "http-errors";
import jwt from "jsonwebtoken";

import UserEmployer from "../models/userEmployer.js"

//Verify Token, similar to our Authorize User...



const verifyToken = async(req, res, next) =>{
  let token;
  

    console.log("authorization header", req.headers.authorization);

    try {
        token = req.headers.authorization.split(" ")[1];  
        if (!token){
           throw new Error("User unauthorized"); 
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log("Decoded token", decodedToken);

        const foundUser = await UserEmployer.findById(decodedToken.id);
        req.user=foundUser;
        
        next();
    } catch {
        next(createError(404, "User could not be authorized. Please try again"));
    }


  

}

export default verifyToken;