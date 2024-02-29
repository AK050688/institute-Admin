import { useState } from "react";
import StudentForm from "../Components/StudentForm";
import TeacherForm from "../Components/TeacherForm";
import Navbar from "../Components/Navbar";

function Registration() {
  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);

  const teacherBtn = () => {
    setTeacher(true);
    setStudent(false);
  };

  const studentBtn = () => {
    setStudent(true);
    setTeacher(false);
  };

  return (
    <div>
      <div className="h-[60px] bg-black">
        <Navbar />
      </div>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('../src/assets/bg.jpg" }}
      >
        <div className="flex gap-3">
          <button
            className={`w-[70%] mb-4 text-[18px] mt-6 rounded-full text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300 ${
              teacher
                ? "bg-blue-400"
                : "bg-white border-1 rounder border-black ring-2 ring-black"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            onClick={teacherBtn}
          >
            Teacher
          </button>
          <button
            className={`w-[70%] mb-4 text-[18px] mt-6 rounded-full text-blue-800 hover:bg-blue-600 hover:text-white py-2 transition-colors duration-300 ${
              student
                ? "bg-blue-300"
                : "bg-white border-1 rounder border-black ring-2 ring-black"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            onClick={studentBtn}
          >
            Student
          </button>
        </div>

        {student && <StudentForm />}
        {teacher && <TeacherForm />}
      </div>
    </div>
  );
}

export default Registration;
