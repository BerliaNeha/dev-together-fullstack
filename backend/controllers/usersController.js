import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer";
import UserDeveloper from "../models/userDeveloper";

export const usersGet = async (req, res, next) => {
  const userId = req.params.id;

  let foundUser;

  try {
    foundUser = await UserEmployer.findById(userId);
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  if (!foundUser) {
    try {
      foundUser = await UserDeveloper.findById(userId);
    } catch {
      return next(
        createError(500, "Database couldn't be queried. Please try again")
      );
    }
  }

  if (foundUser) {
    // Before using populate, the "jobs" array contains only ObjectIds
    // Now let's populate the employers's "jobs" array - for each id, go across to the "albums" collection and "fill in" the details of each job with specific selected keys

    await foundUser.populate("jobs", {
      _id: 1,
      position: 1,
      jobDescription: 1,
    });

    const userData = {
      companyName: foundUser.companyName,
      jobs: foundUser.jobs,
    };
    res.json(userData);
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};
