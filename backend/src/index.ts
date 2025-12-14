import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const users = [
  { id: 1, name: "Ali Khan", email: "ali.khan@gmail.com", salary: 75000 },
  { id: 2, name: "Ahmed Raza", email: "ahmed.raza@yahoo.com", salary: 68000 },
  { id: 3, name: "Sara Malik", email: "sara.malik@gmail.com", salary: 82000 },
  { id: 4, name: "Usman Tariq", email: "usman.tariq@outlook.com", salary: 90000 },
  { id: 5, name: "Ayesha Noor", email: "ayesha.noor@gmail.com", salary: 70000 },
  { id: 6, name: "Hamza Iqbal", email: "hamza.iqbal@yahoo.com", salary: 85000 },
  { id: 7, name: "Fatima Zahra", email: "fatima.zahra@gmail.com", salary: 78000 },
  { id: 8, name: "Bilal Ahmed", email: "bilal.ahmed@outlook.com", salary: 95000 },
  { id: 9, name: "Hassan Ali", email: "hassan.ali@gmail.com", salary: 72000 },
  { id: 10, name: "Zainab Khan", email: "zainab.khan@yahoo.com", salary: 88000 },
];

mongoose
  .connect(
    "mongodb+srv://admin:fahad12345678@cluster0.oakgd6k.mongodb.net/newDataBase"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Error:", err));

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  yearsOfExperience: Number,
  salary: Number,
});

const Teacher = mongoose.model("Teacher", teacherSchema);

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/teachers", (req, res) => {
  Teacher.find()
    .then((teachers) => res.json(teachers))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/teachers", (req, res) => {
  const newTeacher = new Teacher(req.body);

  newTeacher.save()
    .then((teacher) => res.status(201).json(teacher))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.get("/teachers/:id", (req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.json(teacher);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.put("/teachers/:id", (req, res) => {
  Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.json(teacher);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.delete("/teachers/:id", (req, res) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      res.json(teacher);
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
