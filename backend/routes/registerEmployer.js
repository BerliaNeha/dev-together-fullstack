import express from "express";
import { registerEmployerPost } from "../controllers/registerController.js";


const router = express.Router();


router.post("/", registerEmployerPost);

export default router;
