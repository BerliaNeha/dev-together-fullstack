import express from "express";
import { cvPost } from "../controllers/cvController.js";


const CVrouter = express.Router();


CVrouter.post("/", cvPost);



export default CVrouter;
