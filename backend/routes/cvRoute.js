import express from "express";
import { cvPost } from "../controllers/cvController.js";
import { getAllCVs } from "../controllers/userDeveloperDataController.js";

const CVrouter = express.Router();

CVrouter.post("/", cvPost);
CVrouter.get("/", getAllCVs);

export default CVrouter;
