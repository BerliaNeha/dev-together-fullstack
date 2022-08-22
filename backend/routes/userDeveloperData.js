import express from "express";
import { getAllDevelopers, getCV, updateCV, userDeveloperDataGet} from "../controllers/userDeveloperDataController.js";


const router = express.Router();


router.get("/:id", userDeveloperDataGet);
router.post("/:id/cv", updateCV);
router.get("/:id/cv", getCV)
router.get("/", getAllDevelopers)

export default router;
