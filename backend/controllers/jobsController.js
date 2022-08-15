import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer.js";
import Jobs from "../models/jobs.js";
import { response } from "express";

export const jobsPost = async (req, res, next) => {

  console.log(req.body)
  // let existingJob;
  // try {
  //   existingJob = await Jobs.findOne(req.body);
  // } catch {
  //   return next(createError(500, "Query didn't succeed. Please try again"));
  // }
  // if (existingJob) {
  //   res.json({ id: existingJob._id });
  // } else {
  let newJob;

  // CONDITIONS HERE if any

  try {
    newJob = new Jobs(req.body);
    console.log(newJob)
    await newJob.save();
   
    const foundUser = await UserEmployer.findOne({ email: req.body.email });

    if (foundUser) {
      foundUser.jobs.push(newJob._id);
      await foundUser.save();
      res.json(foundUser.populate(
        "jobs"
      ));
    } else {
      next(createError(409, "The user does not exist"));
    }
  } catch {
    return next(createError(500, "Job could not be created. Please try again"));
  }
};

// };
