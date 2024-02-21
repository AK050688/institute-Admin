import React from 'react'

function Comment() {
  return (
    <div>
    <div className='bg-black rounded w-full'>
      <h1 className=' text-white p-6  text-center font-extrabold'>Admin Dashboard</h1>
    </div>
    <div className='grid m-3 grid-cols-1 relative border-b-[0.1px] border-gray-500 '>
    <div className='min-h-[90px] rounded bg-slate-100 shadow-lg'>
      <h1 className='text-black p-7 text-start m-4 font-bold'>Registration List </h1>   
    </div>
   </div>
   <div className='border-b-[0.1px] border-gray-500'>
    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Student</button>
   </div>
   <div className='border-b-[0.1px] border-gray-500'>
    <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Teacher</button>
   </div>
   </div>
  )
}

export default Comment
