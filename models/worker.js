import mongoose from "mongoose";

const workerSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    imageFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const WorkerModal = mongoose.model("Worker", workerSchema);

export default WorkerModal;