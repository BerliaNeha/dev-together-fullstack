import express from "express";
import { usersGet } from "../controllers/registerEmployerController.js";


const router = express.Router();


router.get("/:id", usersGet);

export default router;
