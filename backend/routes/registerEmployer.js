import express from "express";
import { registerEmployerPost } from "../controllers/registerEmployerController.js";


const router = express.Router();


router.post("/", registerEmployerPost);

export default router;
