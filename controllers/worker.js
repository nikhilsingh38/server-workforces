import express from "express";
import mongoose from "mongoose";
import WorkerModal from "../models/worker.js";

export const createWorker = async (req, res) => {
    const worker = req.body;
    const newWorker = new WorkerModal({
        ...worker,
        creator: req.userId,
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


export const getWorkersByUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "User does not exist" })
    }

    const userWorkers = await WorkerModal.find({ creator: id });
    res.status(200).json(userWorkers);

};

export const deleteWorker = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No Task exist with id: ${id}`})
    }
    await WorkerModal.findByIdAndRemove(id);
    res.json({message: "Task Deleted Succesfully"})
    }
    catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}


export const updatedWorker = async (req, res) => {
    const { id } = req.params;
    const {title, description, creator, imageFile, tags} = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No Task exist with id: ${id}` });
      }
      
      const updatedWorker = {
          creator,
          title,
          description,
          tags,
          imageFile,
          _id: id
      }
    await WorkerModal.findByIdAndUpdate(id, updatedWorker, {new: true});
    res.json(updatedWorker);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getWorkersByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const workers = await WorkerModal.find({ tags: { $in: tag } });
    res.json(workers);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
