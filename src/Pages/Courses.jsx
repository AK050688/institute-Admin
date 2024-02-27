import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [courseYear, setCourseYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseName,
      fee: courseFee,
      year: courseYear,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setCourseFee("");
    setCourseYear("");
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="h-[60px] bg-black">
        <Navbar />
      </div>

      <div className=" mx-auto p-4">
        <div className="border w-full flex justify-between p-5 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Course Page</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowForm(true)}
          >
            Add Course
          </button>
        </div>
        {showForm && (
          <div className="fixed  inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[600px]">
              <div className="flex justify-end">
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={handleCloseForm}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">Add Course</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="course-name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Course Name:
                  </label>
                  <input
                    type="text"
                    id="course-name"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="courseFee"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Course Fee:
                  </label>
                  <input type="number" id="course-fee" value={courseFee} onChange={(e) => setCourseFee(e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-full"/>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="course-date"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Course Year:
                  </label>
                  <input
                    type="date"
                    id="course-date"
                    value={courseYear}
                    onChange={(e) => setCourseYear(e.target.value)}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="mt-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 mb-4 rounded shadow flex justify-between text-center"
            >
              <div><span className="font-bold">{course.name} </span><br /><span>Course Name</span></div>
              <div><span className="font-bold">{course.fee}</span><br /><span>Course Fee</span></div>
              <div><span className="font-bold">{course.year}</span><br /><span>Course Year</span> </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
