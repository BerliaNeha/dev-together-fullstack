import express from "express";
import { getCV, updateCV, userDeveloperDataGet} from "../controllers/userDeveloperDataController.js";


const router = express.Router();


router.get("/:id", userDeveloperDataGet);
router.post("/:id/cv", updateCV);
router.get("/:id/cv", getCV)
export default router;
