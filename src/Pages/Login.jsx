import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);

    fetch(
      `https://university-project-paresh.onrender.com/University/Admin/signIn`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          localStorage.setItem("token", res.accessToken);
          alert(`${res.message}`);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    setFormData({
      userName: "",
      password: ""
    });
  };

  const { userName, password } = formData;

  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg.jpg" }}
    >
      <div className="bg-slate-800 border border-slate-400 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="relative my-4">
            <label htmlFor="username" className="block text-md text-white mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={userName}
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              onChange={handleChange}
            />
            <FaUserCircle className="absolute top-0 right-1" />
          </div>
          <div className="relative my-4">
            <label htmlFor="password" className="block text-md text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              onChange={handleChange}
            />
            <IoLockOpenOutline className="absolute top-0 right-1" />
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <span className="text-blue-500">Forgot password?</span>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-slate-600 hover:bg-slate-500 hover:text-white py-2 transition-colors duration-300"
            type="submit"
          >
            {loading ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
