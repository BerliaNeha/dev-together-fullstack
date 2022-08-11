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
        username: foundUser.username
    } 
    res.json(userEmployerData)
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};


export const updateJobs = async(req, res, next) =>{
  const jobId = req.body.id;
  const userId =req.params.id;
  let foundUser;
  try {
    foundUser = await UserEmployer.findById(userId);
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }
  const foundJob =foundUser.jobs.find(
    existingId => existingId == jobId
  );
  if (!foundJob) {
    let updatedUser;
    try {
        // (1) the id of the user to update
        // (2) how to update them
        // (3) options
        updatedUser = await User.findByIdAndUpdate(userId, { $push: { jobs: jobId }}, { new: true, runValidators: true });
    } catch {
        return next(createError(500, "User could not be updated. Please try again"));
    }
    await updatedUser.populate("jobs", {
        _id: 1,
        position: 1,
        jobDescription: 1,
    })
    res.json({ jobs: updatedUser.jobs });
} else {
    // * Case 2: the job id already exists in the user's "jobs" array (oh no!)
    // We don't want to add the same id twice, so let's send an error back to the frontend
    next(createError(409, "The album already exists in your collection!"));
}
}
// ==========================================================
// DELETE all jobs from the logged in user employers "jobs" list
// ==========================================================
export const deleteJobs = async (req, res, next) => {
  const userId = req.params.id;
  let updatedUser;
  try {
      updatedUser = await User.findByIdAndUpdate(userId, { jobs: [] }, { new: true, runValidators: true })
  } catch {
      return next(createError(500, "User could not be updated. Please try again"));
  }
  res.json(updatedUser.jobs);
}


// DELETE a single job from the logged in user employers "jobs" list


export const deleteJob = async (req, res, next) => {
  const userId = req.params.id;
  const jobId = req.params.albumId;
  let updatedUser;
  try {
      // findByIdAndUpdate = change part of the document
      // findByIdAndRemove = delete the full document!
      // * Task 15 update: now we want to pull the item from the user's "albums" array which is EQUAL TO the albumId received in the request URL's params
      updatedUser = await User.findByIdAndUpdate(userId, { $pull: { jobs: jobId }}, { new: true, runValidators: true })
  } catch {
      return next(createError(500, "User could not be updated. Please try again"));
  }
  await updatedUser.populate("albums");
  res.json({ jobs: updatedUser.jobs });
}
// DELETE an employer from the "user employers" collection
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
      await User.findByIdAndRemove(userId);
  } catch {
      return next(createError(500, "User could not be deleted. Please try again"));
  }
  res.json({ message: "Your account has been successfully deleted. Come back soon!" });
}
