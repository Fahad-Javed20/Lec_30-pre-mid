import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db";
import StudentRoutes from "./routers/StudentRoutes";
import RoomRoutes from "./routers/RoomRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/students", StudentRoutes);
app.use("/api/rooms", RoomRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
