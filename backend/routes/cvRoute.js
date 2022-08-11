import express from "express";
import { updateCV } from "../controllers/cvController";


const CVrouter = express.Router();


CVrouter.post("/:id", updateCV);

export default CVrouter;
