import express from "express";
import { jobsPost } from "../controllers/jobsController.js";


const router = express.Router();

router.post("/", jobsPost)    
export default router;