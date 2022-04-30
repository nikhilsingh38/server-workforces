import express from "express";
import WorkerModal from "../models/worker.js";

export const createWorker = async (req, res) => {
    const worker = req.body;
    const newWorker = new WorkerModal({
        ...worker,
        createdAt: new Date().toISOString(),
    });

    try {
        await newWorker.save();
        res.status(201).json(newWorker);
    }
    catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
};

export const getWorkers = async (req, res) => {
    try {
        const workers = await WorkerModal.find();
        res.status(200).json(workers)
    }
    catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
}