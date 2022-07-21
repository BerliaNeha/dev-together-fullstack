import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer.js";


export const userEmployerDataGet = async (req, res, next) => {
  const userId = req.params.id;

  let foundUser;

  try {
    foundUser = await UserEmployer.findById(userId);
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  
  if (foundUser) {
    const userEmployerData = {
        companyName: foundUser.companyName
    } 
    res.json(userEmployerData)
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};