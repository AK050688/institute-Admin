import React, { useState } from 'react';
import Select from 'react-select';


const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    email: '',
    mobileNo: '',
    address: '',
    pin: '',
    state: '',
    cityORVillage: '',
    gender: '',
    bloodGroup: '',
    rollNo: '',
    courseTaken: '',
    branchName: '',
    admissionYear: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];    

  return (
    <div className="max-w-2xl mx-auto p-8 border mt-6 rounded-md bg-[#40ecb5]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        <div className='flex w-full gap-3'>
        <div className='w-1/2'>
          <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
          <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        <div className='w-1/2'>
          <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        </div>
        <div className='flex w-full gap-3'>
        <div className='w-1/2'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="mail" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        <div className='w-1/2'>
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
          <input type="text" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        </div>

        <div className='flex w-full gap-3'>
            <div className='w-1/2'>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            </div>
            <div className='w-1/2'>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">Pin</label>
            <input type="text" id="pin" name="pin" value={formData.pin} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            </div>
        </div>

        <div className='flex w-full gap-3'>
            <div className='w-1/2'>
                <label htmlFor="cityORVillage" className="block text-sm font-medium text-gray-700">City OR Village</label>
                <input type="text" id="cityORVillage" name="cityORVillage" value={formData.cityORVillage} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            </div>
            <div className='w-1/2'>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
            </div>
        </div>

        <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <Select
                value={formData.gender}
                onChange={handleChange}
                name='gender'
                options={options}
                className="mt-1 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-full rounded-md" required
            />
        </div>
        <div className='flex w-full gap-3'>
          <div className='w-1/2'>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
            <input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
          </div>
          <div className='w-1/2'>
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">Roll No</label>
            <input type="text" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
          </div>
        </div>
        <div className='flex w-full gap-3'>
        <div className='w-1/2'>
          <label htmlFor="courseTaken" className="block text-sm font-medium text-gray-700">Course Taken</label>
          <input type="text" id="courseTaken" name="courseTaken" value={formData.courseTaken} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        <div className='w-1/2'>
          <label htmlFor="branchName" className="block text-sm font-medium text-gray-700">Branch Name</label>
          <input type="text" id="branchName" name="branchName" value={formData.branchName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        </div>
        <div>
          <label htmlFor="admissionYear" className="block text-sm font-medium text-gray-700">Admission Year</label>
          <input type="number" id="admissionYear" name="admissionYear" value={formData.admissionYear} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" required/>
        </div>
        
        



        <div>
          <button type="submit" className="w-full bg-[#000] text-white p-3 rounded-md hover:bg-[#232222] transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
