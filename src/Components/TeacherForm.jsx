import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    guardianName: "",
    email: "",
    mobileNo: "",
    address: "",
    state: "",
    cityORVillage: "",
    pin: "",
    gender: "",
    bloodGroup: "",
    department: "",
    joiningDate: ""
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSelectChange = (selectedOption) => {
    handleChange("gender", selectedOption.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    fetch(
      "https://university-project-paresh.onrender.com/University/Student/signUp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          localStorage.setItem("TeacherToken", data.accessToken);
          alert(`${data.message}`);
          navigate("/teacher");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Others" }
  ];

  return (
    <div className="max-w-2xl mx-auto mt-6 rounded-3xl text-white border border-slate-400 p-10 shadow-lg backdrop-filter backdrop-blur-xs bg-opacity-30 relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="guardianName"
              className="block text-sm font-medium  "
            >
              Guardian Name
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
        </div>

        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <label htmlFor="email" className="block text-sm font-medium  ">
              Email
            </label>
            <input
              type="mail"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="mobileNo" className="block text-sm font-medium  ">
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
        </div>

        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <label htmlFor="address" className="block text-sm font-medium  ">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="pin" className="block text-sm font-medium  ">
              Pin
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
        </div>

        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <label
              htmlFor="cityORVillage"
              className="block text-sm font-medium  "
            >
              City OR Village
            </label>
            <input
              type="text"
              id="cityORVillage"
              name="cityORVillage"
              value={formData.cityORVillage}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="state" className="block text-sm font-medium  ">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium  ">
            Gender
          </label>
          <Select
            value={options.find((option) => option.value === formData.gender)}
            onChange={handleSelectChange}
            options={options}
            className="mt-1 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full rounded-md"
            required
          />
        </div>
        <div className="flex w-full gap-3">
          <div className="w-1/2">
            <label htmlFor="bloodGroup" className="block text-sm font-medium  ">
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="department" className="block text-sm font-medium  ">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="joiningDate" className="block text-sm font-medium  ">
            Joining Date
          </label>
          <input
            type="date"
            id="joiningDate"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300  text-black rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-black p-3 rounded-md hover:bg-blue-300 transition duration-300"
          >
            {loading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
