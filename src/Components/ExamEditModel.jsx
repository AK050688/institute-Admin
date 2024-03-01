// ExamEditModel.jsx
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExamEditModel = ({
  examId,
  initialExamData,
  onEditExam,
  setShowEditForm
}) => {
  const [formData, setFormData] = useState(initialExamData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(initialExamData);
  }, [initialExamData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://university-project-paresh.onrender.com/University/ExamRoute/exams/${examId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Exam:", data);
        onEditExam(examId, formData);
        toast.success("Exam updated successfully");
        setShowEditForm(false);
      })
      .catch((error) => {
        toast.error("Failed to update Exam. Please try again later.");
        console.error("Error updating Exam:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-800 border border-slate-400 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 text-white">
      <ToastContainer />
      <div className="p-6 rounded shadow-lg w-[600px] bg-black">
        <div className="flex justify-between">
          <div className="flex items-center ml-52">
            <h2 className="text-2xl font-bold mx-auto">Edit Exam</h2>
          </div>
          <div className="flex items-center">
            <button
              className="hover:text-gray-800 text-2xl text-white mt-0 bg-black"
              onClick={handleCloseForm}
            >
              <FiX />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 ">
          <div className="mb-2">
            <label
              htmlFor="exam-branch"
              className="block text-white font-bold "
            >
              Exam Branch:
            </label>
            <input
              type="text"
              id="exam-branch"
              name="examBranch"
              value={formData.examBranch}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exam-year" className="block text-white font-bold">
              Exam Year:
            </label>
            <input
              type="text"
              id="exam-year"
              name="examYear"
              value={formData.examYear}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exam-type" className="block text-white font-bold">
              Exam Type:
            </label>
            <input
              type="text"
              id="exam-type"
              name="examType"
              value={formData.examType}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="exam-subject"
              className="block text-white font-bold"
            >
              Exam Subject:
            </label>
            <input
              type="text"
              id="exam-subject"
              name="examSubject"
              value={formData.examSubject}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exam-marks" className="block text-white font-bold">
              Exam Timming:
            </label>
            <input
              type="time"
              id="exam-times"
              name="examTiming"
              value={formData.examTiming}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exam-marks" className="block text-white font-bold">
              Exam Marks:
            </label>
            <input
              type="text"
              id="exam-marks"
              name="examMarks"
              value={formData.examMarks}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exam-date" className="block text-white font-bold">
              Exam Date:
            </label>
            <input
              type="date"
              id="exam-date"
              name="examDate"
              value={formData.examDate}
              onChange={handleChange}
              className="border-2 border-gray-400 rounded px-3 py-2 w-[440px] text-black"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="exam-question-paper"
              className="block text-white font-bold mb-2 "
            >
              Exam Question Paper (PDF):
            </label>
            <input
              type="file"
              id="exam-question-paper"
              accept=".pdf"
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
          >
            {loading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Save"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExamEditModel;
