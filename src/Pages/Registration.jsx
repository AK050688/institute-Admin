import React, { useState } from 'react'
import StudentForm from '../Components/StudentForm';
import TeacherForm from '../Components/TeacherForm';

function Registration() {

  const [teacher,setTeacher] = useState(false);
  const [student,setStudent] = useState(true);

  const teacherBtn = () => {
    setTeacher(!teacher)
    setStudent(false)
  }

  const studentBtn = () => {
    setStudent(!student)
    setTeacher(false)
  }


  return (
    <div >
    <div className='bg-black rounded w-full'>
      <h1 className=' text-white p-6  text-center font-extrabold text-[30px]'>Admin Dashboard</h1>
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
