import express from "express";
import { updateCV, userDeveloperDataGet} from "../controllers/userDeveloperDataController.js";


const router = express.Router();


router.get("/:id", userDeveloperDataGet);
router.patch("/:id/cv", updateCV); 
export default router;
