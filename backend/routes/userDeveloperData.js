import express from "express";
import { userDeveloperDataGet} from "../controllers/userDeveloperDataController.js";


const router = express.Router();


router.get("/:id", userDeveloperDataGet);

export default router;
