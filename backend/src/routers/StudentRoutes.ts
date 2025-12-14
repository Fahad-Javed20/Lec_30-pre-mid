import {Router} from "express"; 
import StudentController from "../controllers/StudentController";

const router = Router();
const studentController = new StudentController();  
router.get("/", studentController.getAllStudents);
router.post("/", studentController.createStudent);

export default router;