import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserEmployer from "../models/userEmployer.js";
import Jobs from "../models/jobs.js";
import { response } from "express";

export const jobsPost = async (req, res, next) => {
//   let existingJob;
//   try {
//     existingJob = await Jobs.findOne(req.body);
//   } catch (err) {
//     console.log(err);
//     return next(createError(500, "Query didn't succeed. Please try again"));
//   }
// console.log(existingJob, "existing");

//   if (existingJob) {
//     res.json({ id: existingJob._id });
    
//   } else {

  let newJob;

    try {
      newJob = new Jobs(req.body);
      await newJob.save();
    } catch (err) {
      console.log(err);
      return next(
        createError(500, "Job could not be created. Please try again")
      );
    }
    
    res.json({ id: newJob._id });
  //}
};

// };
