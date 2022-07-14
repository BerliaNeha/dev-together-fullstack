import express from "express";
import { registerDeveloperPost } from "../controllers/registerController.js";


const router = express.Router();


router.post("/", registerDeveloperPost);

export default router;
