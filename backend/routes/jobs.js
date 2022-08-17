import express from "express";
import { jobsPost } from "../controllers/jobsController.js";
import { jobsGet} from "../controllers/jobsController.js";


const router = express.Router();

router.get("/", jobsGet)

router.post("/", jobsPost)    
export default router;