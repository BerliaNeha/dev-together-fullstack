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
  } = req.body;

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
    return next(
      createError(
        409,
        "Username has already been taken. Please try a different username"
      )
    );
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
    return next(
      createError(
        412,
        "Email address has already been used to create an account. Please try a different email address"
      )
    );
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
    return next(
      createError(
        409,
        "Username has already been taken. Please try a different username"
      )
    );
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
    return next(
      createError(
        409,
        "Username has already been taken. Please try a different username"
      )
    );
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
    return next(
      createError(
        409,
        "Username has already been taken. Please try a different username"
      )
    );
  }

  // If not, pass them with encryption

  const newUserEmployer = new UserEmployer({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    phoneNumber: req.body.phoneNumber,
    companyName: req.body.companyName,
    companyWebsite: req.body.companyWebsite,
    hiringNumberRadioButton: req.body.hiringNumberRadioButton,
    hiringRemoteDeveloperCheckbox: req.body.hiringRemoteDeveloperCheckbox,
    policyAndTermsCheckbox: req.body.policyAndTermsCheckbox,
    subscribeCheckbox: req.body.subscribeCheckbox,
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
    return next(
      createError(500, "Registration could not be completed. Please try again")
    );
  }

  res.status(201).json({ id: newUserEmployer._id, token: newToken });
};
