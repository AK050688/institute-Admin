import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Notification = () => {
    const [formData, setFormData] = useState({
        title : "",
        subject: "",
        date : "",
        discription : "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form validation or submit data to the server here
        console.log(formData);
    };

    return (
        <>
      <div className=" h-[60px] bg-black">
       <Navbar/>
      </div>
        <div className="w-[80%] mt-10 border border-8 border-slate-900	 mx-auto m-4 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Notification</h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="flex flex-col w-1/2 pr-4 mb-4">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <div className="flex flex-col w-1/2 pl-4 mb-4">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <div className="flex flex-col w-1/2 pr-4 mb-4">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="flex flex-col w-1/2 pl-4 mb-4">
                    <label htmlFor="discription" className="text-sm font-medium text-gray-700">Discription</label>
                    <textarea type="text" id="discription" name="discription" value={formData.discription} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <button type="submit" className="bg-slate-600 text-black py-2 px-4 rounded-md hover:bg-slate-500 ml-auto">Save</button>
            </form>
        </div>
        </>
    );
};

export default Notification;
