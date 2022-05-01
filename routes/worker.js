import express from "express";

const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createWorker,
  getWorkers,
    getWorkersByUser,
  getWorkersByTag,
  updatedWorker,
  deleteWorker,
} from "../controllers/worker.js";

router.post("/", auth, createWorker);
router.get("/", getWorkers);
router.get("/tag/:tag", getWorkersByTag);

router.delete("/:id", auth, deleteWorker);
router.patch("/:id", auth, updatedWorker);
router.get("/userWorkers/:id", auth, getWorkersByUser);

export default router;
