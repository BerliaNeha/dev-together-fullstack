import createError from "http-errors";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserDeveloper from "../models/userDeveloper.js";
import CV from "../models/CV.js";
import mongoose from "mongoose";
import _ from "lodash";
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
      jobTitle: foundUser.jobTitle,
      username: foundUser.username,
    };
    res.json(userDeveloperData);
  } else {
    next(createError(404, "No user exists with this email. Please try again"));
  }
};

export const getCV = async (req, res, next) => {
  const userId = req.params.id;

  let foundCV;

  try {
    foundCV = await CV.findOne({ userId: mongoose.Types.ObjectId(userId) });
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  if (foundCV) {
    res.json(
      _.pick(foundCV, ["experience", "education", "skills", "languages","aboutMe"])
    );
  } else {
    next(createError(404, "The user has no CV yet. Please try again"));
  }
};

export const updateCV = async (req, res, next) => {
  const userId = req.params.id;

  let foundCV;

  try {
    foundCV = await CV.findOne({ userId: mongoose.Types.ObjectId(userId) });
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  if (foundCV) {
    foundCV.experience = req.body.experience;
    foundCV.education = req.body.education;
    foundCV.skills = req.body.skills;
    foundCV.languages = req.body.languages;
    foundCV.aboutMe = req.body.aboutMe
    foundCV.save();
    res.json({ id: foundCV._id });
  } else {
    let newCV;

    try {
      newCV = new CV({ ...req.body, userId: mongoose.Types.ObjectId(userId) });
      await newCV.save();
    } catch (err) {
      console.log(err);
      return next(
        createError(500, "CV could not be created. Please try again")
      );
    }

    res.json({ id: newCV._id });
  }
};

export const getAllDevelopers = async (req, res, next) => {
  // const jobId = req.params.id;
console.log(req.query.pageSize)

const page = Number(req.query.page) || 1
const pageSize = Number(req.query.pageSize) || 10 
const skipRows = (page - 1) * pageSize;

  let foundAllDevelopers;
  try {
    foundAllDevelopers = await UserDeveloper.find().sort({
      createdAt: -1,
    }).skip(skipRows).limit(pageSize);

    return res.status(200).json(foundAllDevelopers);
  } catch {
    return next(createError(500, "Jobs not found. Please try again"));
  }
};

export const getAllCVs = async (req, res, next) => {
  // const jobId = req.params.id;

  let foundAllCVs;
  try {
    foundAllCVs = await CV.find().sort({
      createdAt: -1,
    });

    return res.status(200).json(foundAllCVs);
  } catch {
    return next(createError(500, "CVs not found. Please try again"));
  }
};
