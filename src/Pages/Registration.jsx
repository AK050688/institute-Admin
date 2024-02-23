import React, { useState } from 'react'
import StudentForm from '../Components/StudentForm';
import TeacherForm from '../Components/TeacherForm';
import Navbar from '../Components/Navbar';

function Registration() {

  const [teacher,setTeacher] = useState(false);
  const [student,setStudent] = useState(true);

  const teacherBtn = () => {
    setTeacher(true)
    setStudent(false)
  }

  const studentBtn = () => {
    setStudent(true)
    setTeacher(false)
  }


  return (
    <div >
    <div className=" h-[60px] bg-black">
       <Navbar/>
      </div>
   <div className='border-[0.1px] border-gray-500 flex mt-4 p-2 gap-3'>
    <button className={`w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ${teacher ? "bg-emerald-500": "bg-white"}`}  onClick={teacherBtn}>Teacher</button>
    <button className={`w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 ${student ? "bg-emerald-500": "bg-white"}`} onClick={studentBtn}>Student</button>
   </div>
    {student && <StudentForm/>}
    {teacher && <TeacherForm/>}

   </div>
  )
}

export default Registration
