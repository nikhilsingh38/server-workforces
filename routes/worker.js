import express from "express";

const router = express.Router();

import { createWorker, getWorkers } from "../controllers/worker.js";

router.post("/", createWorker);
router.get("/", getWorkers);

export default router;
