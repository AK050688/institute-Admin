import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoLockOpenOutline } from 'react-icons/io5';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


function Login() {
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState('');
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const {  userName, password,  } = inputs;
  const handleSubmit =  (event) => {
    event.preventDefault();
    const data = ( { userName, password, });
    setUserData(data.data);
  };

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../src/assets/bg.jpg.jpg"}}>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className='relative my-4'>
        <input type="text" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer '
         onChange={handleChange}
        
         />
        
       <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>your userName</label>
        <FaUserCircle className='absolute top-1 right-4'/>
        </div>
        <div className='relative my-4' >
        <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer '
         onChange={handleChange}
        
        />
        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>your password</label>
          <IoLockOpenOutline className='absolute top-1 right-4'/>
        </div> 
        <div className='flex justify-between items-center '>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" />
            <label htmlFor="Remender me"> Remender me</label>
          </div>
          <span className='text-blue-500'>Forget password?</span>
        </div>
        <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;