import express from "express";
import { registerDeveloperPost } from "../controllers/registerDeveloperController.js";


const router = express.Router();


router.post("/", registerDeveloperPost);

export default router;
