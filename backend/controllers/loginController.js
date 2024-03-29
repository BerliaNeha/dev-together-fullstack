import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserDeveloper from "../models/userDeveloper.js";
import UserEmployer from "../models/userEmployer.js";

export const loginPost = async (req, res, next) => {
  const { email, password } = req.body;
  let foundUser;

  try {
    foundUser = await UserEmployer.findOne({ email : email });
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  if (
    !foundUser
  ) {
    try{
        foundUser = await UserDeveloper.findOne(({ email : email}))

    }catch {
       return next(createError(500, "Database couldn't be queried. Please try again")) 
    }
   
  };
  

  if (foundUser) {
    let decryptedPassword;
    let isValidPassword;

    try {
      decryptedPassword = CryptoJS.AES.decrypt(
        foundUser.password,
        process.env.PASS_SEC
      );

      const originalPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

      isValidPassword = password === originalPassword;

      console.log(isValidPassword);

      // bcrypt.compare(password, found.password);
    } catch {
      return next(
        createError(500, "Logging in process failed. Please try again")
      );
    }

    if (!isValidPassword) {
      return res.status(409).json({message:'Incorrect password, please try again'})
    }

    let newToken;

    try {
      newToken = jwt.sign(
        { id: foundUser.id, isAdmin: foundUser.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
    } catch {
      return next(
        createError(500, "Login could not be completed. Please try again")
      );
    }

    res.json({ id: foundUser._id, token: newToken, companyName: foundUser.companyName  });
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};


