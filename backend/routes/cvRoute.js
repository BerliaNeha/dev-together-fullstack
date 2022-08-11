import express from "express";
import { cvPost } from "../controllers/cvController.js";


const CVrouter = express.Router();


CVrouter.post("/experience", cvPost);
CVrouter.post("/education", cvPost);
CVrouter.post("/skills", cvPost);
CVrouter.post("/languages", cvPost);


export default CVrouter;
