import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer.js";

export const registerEmployerPost = async (req, res, next) => {
  const {
    username,
    email,
    password,
    phoneNumber,
    companyName,
    companyWebsite,
    hiringNumberRadioButton,
    subscribeCheckbox,
    policyAndTermsCheckbox,
    hiringRemoteDeveloperCheckbox
  } = req.body;

  console.log(req.body);

  // Check if username, email and password already exists

  let foundEmployerName;
  try {
    foundEmployerName = await UserEmployer.findOne({ username: username });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundEmployerName) {
    return res.status(409).json({message:'Username already taken, please try again!'})
  }

  let foundEmployerEmail;

  try {
    foundEmployerEmail = await UserEmployer.findOne({ email: email });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundEmployerEmail) {
    return res.status(409).json({message:'An account with this email already exists, please try again'})
  }

  //Extra checks for Employer registration for phone number company name and company website to avoid duplication

  // add a token payload to the new registration and send response

  let foundEmployerPhone;
  try {
    foundEmployerPhone = await UserEmployer.findOne({
      phoneNumber: phoneNumber,
    });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundEmployerPhone) {
    return res.status(409).json({message:'Phone number already exists in database, please give another number'})
  }

  let foundEmployerCompanyName;
  try {
    foundEmployerCompanyName = await UserEmployer.findOne({
      companyName: companyName,
    });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundEmployerCompanyName) {
    return res.status(409).json({message:'An account with this company name already exists, please try again'})
  }

  let foundEmployerCompanyWebsite;
  try {
    foundEmployerCompanyWebsite = await UserEmployer.findOne({
      companyWebsite: companyWebsite,
    });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again")
    );
  }

  if (foundEmployerCompanyWebsite) {
    return res.status(409).json({message:'An account with this website already exists, please try again'})
  }

  // If not, pass them with encryption

  const newUserEmployer = new UserEmployer({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    phoneNumber: phoneNumber,
    companyName: companyName,
    companyWebsite:companyWebsite,
    hiringNumberRadioButton: hiringNumberRadioButton,
    hiringRemoteDeveloperCheckbox: hiringRemoteDeveloperCheckbox,
    policyAndTermsCheckbox: policyAndTermsCheckbox,
    subscribeCheckbox: subscribeCheckbox,
    jobs:[],
  });

  try {
    const savedUserEmployer = await newUserEmployer.save();
    //res.status(201).json(savedUser);
  } catch {
    return next(
      createError(500, "User could not be created. Please try again")
    );
  }

  let newToken;

  try {
    newToken = jwt.sign({ id: newUserEmployer.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("dataCookie", newToken, { httpOnly: true, sameSite: "Strict" });
  } catch {
    return res.status(409).json({message:'Registration could not be completed. Please try again'})
   
  }

  res.status(201).json({ id: newUserEmployer._id, username: newUserEmployer.username, token: newToken });


};


