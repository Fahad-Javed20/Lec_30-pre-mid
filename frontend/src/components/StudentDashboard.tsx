import { useEffect, useState } from 'react'
import type { StudentType } from '../types/StudentType'
import StudentForm from './StudentForm'
import StudentsList from './StudentsList';

const StudentDashboard = () => {

  const [students, setStudents] = useState<StudentType[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
    const response = await fetch("http://localhost:3000/api/students");
    const data = await response.json();
    setStudents(data);
  };
    fetchStudents();
  }, []);

  const handelStudent = (student: StudentType) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };
  
  

  return (
    <div>
        <StudentForm onAddStudent = {handelStudent} />
        <StudentsList students={students} />
    </div>
  )
}

export default StudentDashboard
