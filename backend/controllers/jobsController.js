import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer.js";
import Jobs from "../models/jobs.js";

export const jobsPost = async (req, res, next) => {
  let newJob;

  // CONDITIONS HERE if any

  try {
    newJob = new Jobs(req.body);

    await newJob.save();
  } catch {
    return next(createError(500, "Job could not be created. Please try again"));
  }

  res.json({ id: newJob._id });
};
