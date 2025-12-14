import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./Config/db";
import StudentRoutes from "./routers/StudentRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/students", StudentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
