import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const port = 5000;

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const MONGODB_URL =
  "mongodb+srv://nikhil:nikhil_123@cluster0.58hrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose(MONGODB_URL).then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  })
}).catch((error) => console.log(`${error} did not connect`))


