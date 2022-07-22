import express from "express";
import { userEmployerDataGet} from "../controllers/userEmployerDataController.js";


const router = express.Router();


router.get("/:id", userEmployerDataGet);

export default router;
