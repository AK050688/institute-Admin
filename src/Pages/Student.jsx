import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./student.css";
import Navbar from "../Components/Navbar";

function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(
      "https://university-project-paresh.onrender.com/University/Admin/allStudents",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.Students);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="student-container">
      <div className="h-[60px] bg-black">
        <Navbar />
      </div>

      <div className="student-heading">
        <div className="min-h-[90px] rounded flex justify-center items-center">
          <h1 className="text-3xl font-semibold text-blue-600">
            All Student Lists
          </h1>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-gray-100">
        <div className="flex items-center mb-4 md:mb-0">
          <label htmlFor="rowsPerPage" className="text-gray-600">
            Rows per page:
          </label>
          <select
            name="rowsPerPage"
            id="rowsPerPage"
            className="border p-2 px-4 md:px-9 text-gray-800 rounded-md"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="search"
              name="search"
              placeholder="Search here"
              className="border p-2 px-4 md:px-28 rounded-md focus:outline-none"
            />
            <div className="absolute top-3 right-2 text-gray-500">
              <FaSearch />
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
      </section>

      {!loading && (
        <div className="table-container">
          <div className="table-section">
            <table>
              <thead>
                <tr>
                  <th>Roll No.</th>
                  <th>Name</th>
                  <th>Father&apos;s Name</th>
                  <th>Email</th>
                  <th>State</th>
                  <th>Gender</th>
                  <th>Course Taken</th>
                  <th>Branch Name</th>
                  <th>Admission Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.rollNo}</td>
                    <td>{student.Name}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.email}</td>
                    <td>{student.state}</td>
                    <td>{student.gender}</td>
                    <td>{student.courseTaken}</td>
                    <td>{student.branchName}</td>
                    <td>{student.admissionYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;
