import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  subject: String,
  yearsOfExperience: Number,
  salary: Number,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;