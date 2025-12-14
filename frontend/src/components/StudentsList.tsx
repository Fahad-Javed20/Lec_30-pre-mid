import type { StudentType } from "../types/StudentType";

interface StudentsListProps {
  students: StudentType[];
}
const StudentsList = ({ students }: StudentsListProps) => {
  return (
    <div>
    <h2>Students List</h2>
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - Class: {student.class}, Roll No: {student.rollNumber}, City: {student.city}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default StudentsList
