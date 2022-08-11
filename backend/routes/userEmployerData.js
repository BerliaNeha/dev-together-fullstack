import express from "express";
import {
  updateJobs,
  userEmployerDataGet,
} from "../controllers/userEmployerDataController.js";

const router = express.Router();

router.patch("/:id/jobs", updateJobs);
router.get("/:id", userEmployerDataGet);

export default router;
