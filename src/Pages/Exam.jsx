import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import ExamFormModel from "../Components/ExamFormModel.jsx";
import ExamEditModel from "../Components/ExamEditModel.jsx";

const Exam = () => {
  const [exams, setExams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editExamData, setEditExamData] = useState(null);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    fetch(
      "https://university-project-paresh.onrender.com/University/ExamRoute/exams",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("examData", data);
        setExams(data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditExam = (examId, updatedExamData) => {
    setExams(
      exams.map((exam) => {
        if (exam._id === examId) {
          return { ...exam, ...updatedExamData };
        }
        return exam;
      })
    );
  };

  const deleteRow = (examId) => {
    fetch(
      `https://university-project-paresh.onrender.com/University/ExamRoute/exams/${examId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted exam:", data);
        alert(`${data.message}`);
      })
      .catch((error) => {
        console.error("Error deleting exam:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addExam = (newExam) => {
    console.log("new", newExam);
    setExams([...exams, newExam.examDetails]);
  };

  return (
    <div>
      <div className="h-[60px] bg-black">
        <Navbar />
      </div>

      <div
        className="mx-auto bg-cover h-[90vh]"
        style={{ backgroundImage: "url('../src/assets/bg.jpg" }}
      >
        <div className="w-full flex justify-between items-center p-4">
          <div></div>
          {/* <h1 className="text-lg font-bold mb-2 mx-auto">Course Page</h1> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[15%] mt-0"
            onClick={() => setShowForm(true)}
          >
            Add Exam
          </button>
        </div>

        {showForm && (
          <ExamFormModel onAddExam={addExam} setShowForm={setShowForm} />
        )}

        {showEditForm && (
          <ExamEditModel
            examId={editExamData._id}
            initialExamData={editExamData}
            onEditExam={(examId, updatedExamData) =>
              handleEditExam(examId, updatedExamData)
            }
            setShowEditForm={setShowEditForm}
          />
        )}

        <div className="student-heading">
          <div className="min-h-[90px] rounded flex justify-center items-center">
            <h1 className="text-3xl font-semibold text-blue-600">
              All Exam Lists
            </h1>
          </div>
        </div>

        {loading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="table-container">
            <div className="table-section">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Exam Branch</th>
                    <th>Exam Type</th>
                    <th>Subject</th>
                    <th>Year</th>
                    <th>Timing</th>
                    <th>Marks</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {exams?.map((exam, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{exam.examBranch}</td>
                      <td>{exam.examType}</td>
                      <td>{exam.examSubject}</td>
                      <td>{exam.examYear}</td>
                      <td>{exam.examTiming}</td>
                      <td>{exam.examMarks}</td>
                      <td>{exam.examDate}</td>
                      <td>
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-md"
                          onClick={() => {
                            setEditExamData(exam);
                            setShowEditForm(true);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                          onClick={() => deleteRow(exam._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exam;
