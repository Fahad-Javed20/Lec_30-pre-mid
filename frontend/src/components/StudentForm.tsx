interface StudentFormProps {
  onAddStudent: (student: StudentType) => void;
}

import { useForm } from "react-hook-form";
import type { StudentType } from "../types/StudentType";

const StudentForm = ({ onAddStudent }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentType>();

  const onSubmit = async (data: StudentType) => {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const newStudent = await response.json();
    onAddStudent(newStudent);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Student Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <input
            type="text"
            {...register("class", { required: true })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.class && (
            <p className="text-red-500 text-sm mt-1">Class is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Roll Number
          </label>
          <input
            type="number"
            {...register("rollNumber", { required: true })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.rollNumber && (
            <p className="text-red-500 text-sm mt-1">
              Roll Number is required
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            {...register("city", { required: true })}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">City is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
