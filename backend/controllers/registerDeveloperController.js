import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserDeveloper from "../models/userDeveloper.js";

export const registerDeveloperPost = async (req, res, next) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    jobTitle,
    subscribeCheckbox,
  } = req.body;

  // Check if username or email  already exists

  let foundDeveloperName;
  try {
    foundDeveloperName = await UserDeveloper.findOne({ username: username });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundDeveloperName) {
    return res.status(409).json({message:'Username already taken, please try again!'})
  }

  let foundDeveloperEmail;

  try {
    foundDeveloperEmail = await UserDeveloper.findOne({ email: email });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundDeveloperEmail) {
    return res.status(409).json({message:'An account with this email already exists, please try again'})
  }

  // If not, pass them with encryption

  const newUserDeveloper = new UserDeveloper({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    policyAndTermsCheckbox: req.body.policyAndTermsCheckbox,
    subscribeCheckbox: req.body.subscribeCheckbox,
  });

  console.log(req.body);

  try {
    const savedUserDeveloper = await newUserDeveloper.save();
    //res.status(201).json(savedUser);
  } catch {
    return next(
      createError(500, "User could not be created. Please try again")
    );
  }

  // add a token payload to the new registration and send response

  let newToken;

  try {
    newToken = jwt.sign({ id: newUserDeveloper.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("dataCookie", newToken, { httpOnly: true, sameSite: "Strict" });
  } catch {
    return res.status(409).json({message:'Registration could not be completed. Please try again'})
  }

  res.status(201).json({ id: newUserDeveloper._id, token: newToken });
};
