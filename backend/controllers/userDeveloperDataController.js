import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserDeveloper from "../models/userDeveloper.js";


export const userDeveloperDataGet = async (req, res, next) => {
  const userId = req.params.id;

  let foundUser;

  try {
    foundUser = await UserDeveloper.findById(userId);
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  
  if (foundUser) {
    const userDeveloperData = {
        jobTitle: foundUser.jobTitle
    } 
    res.json(userDeveloperData)
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};