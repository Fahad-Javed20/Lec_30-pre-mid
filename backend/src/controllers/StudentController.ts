import {Request, Response} from "express";
import Student from "../models/StudentModel";   

class StudentController {
    async getAllStudents(req: Request, res: Response) {
        Student.find()
            .then((students) => res.json(students))
            .catch((err) => res.status(500).json({ error: err.message }));
    }

    async createStudent(req: Request, res: Response) {
        const newStudent = new Student(req.body);
        newStudent.save()
            .then((student) => res.status(201).json(student))
            .catch((err) => res.status(400).json({ error: err.message }));
    }

}

export default StudentController;