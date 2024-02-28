import { FaSearch } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

function Teachers() {
  const [teacher, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(
      "https://university-project-paresh.onrender.com/University/Admin/allTeachers",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("teacherData", data.Teachers);
        setTeachers(data.Teachers);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="teacher-container">
      <div className=" h-[60px] bg-black">
        <Navbar />
      </div>
      <div className="student-heading">
        <div className="min-h-[90px] rounded flex justify-center items-center">
          <h1 className="text-3xl font-semibold text-blue-600">
            All Teachers List
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
                  <th>#</th>
                  <th>Name</th>
                  <th>Guardian Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>State</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Department</th>
                  <th>Joining Date</th>
                </tr>
              </thead>
              <tbody>
                {teacher.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.Name}</td>
                    <td>{student.guardian_Name}</td>
                    <td>{student.email}</td>
                    <td>{student.mobileNo}</td>
                    <td>{student.state}</td>
                    <td>{student.gender}</td>
                    <td>{student.bloodGroup}</td>
                    <td>{student.Department}</td>
                    <td>{student.joiningDate}</td>
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

export default Teachers;
