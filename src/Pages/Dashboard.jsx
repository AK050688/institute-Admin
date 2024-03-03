import { useState, useEffect } from "react";
import {
  FaBell,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaClipboardList,
  FaUserGraduate
} from "react-icons/fa";
import Navbar from "../Components/Navbar";

function Dashboard() {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  const [admissionCount, setAdmissionCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [examCount, setExamCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const responses = await Promise.all([
          fetch(
            "https://university-project-paresh.onrender.com/University/Admin/allStudents",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          ),
          fetch(
            "https://university-project-paresh.onrender.com/University/Admin/allTeachers",
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          ),
          fetch(
            "https://university-project-paresh.onrender.com/University/Notification/notifications"
          ),
          fetch(
            "https://university-project-paresh.onrender.com/University/Admission/allAdmissionForms"
          ),
          fetch(
            "https://university-project-paresh.onrender.com/University/Course/allCourses"
          ),
          fetch(
            "https://university-project-paresh.onrender.com/University/ExamRoute/exams"
          )
        ]);

        const data = await Promise.all(responses.map((res) => res.json()));
        console.log(data);

        setStudentCount(data[0].Students.length);
        setTeacherCount(data[1].Teachers.length);
        setNotificationCount(data[2].length);
        setAdmissionCount(data[3].applicationForms.length);
        setCourseCount(data[4].courses.length);
        setExamCount(data[5].length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-[60px] bg-black">
        <Navbar />
      </div>
      <div className="bg-cover bg-login h-[91vh]" style={{ backgroundImage: "url('../src/assets/bg.jpg" }}>
        <div className="grid grid-cols-6 justify-center gap-4 w-full p-10 pt-2">
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-8">
            <FaUserGraduate size={50} />
            <div className="ml-4">
              <span className="text-lg">Student Registered</span>
              <span className="text-xl block">{studentCount}</span>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-8">
            <FaChalkboardTeacher size={50} />
            <div className="ml-4">
              <span className="text-lg">Teacher Registered</span>
              <span className="text-xl block">{teacherCount}</span>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-4">
            <FaBell size={50} />
            <div className="ml-4">
              <span className="text-lg">Notification</span>
              <span className="text-xl block">{notificationCount}</span>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-4">
            <FaClipboardList size={50} />
            <div className="ml-4">
              <span className="text-lg">Admission Forms</span>
              <span className="text-xl block">{admissionCount}</span>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-8">
            <FaBook size={50} />
            <div className="ml-4">
              <span className="text-lg">Course </span>
              <span className="text-xl block">{courseCount}</span>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg flex flex-row items-center p-8">
            <FaClipboardCheck size={50} />
            <div className="ml-4">
              <span className="text-lg">Exam </span>
              <span className="text-xl block">{examCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
