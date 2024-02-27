import React from 'react'
import { IoIosSearch } from "react-icons/io";
import "./student.css"
import Navbar from '../Components/Navbar';


 






function Student() {
 
  return (
  <div className=''>
    <div className=" h-[60px] bg-black">
       <Navbar/>
      </div>

    <div className='grid m-3 grid-cols-1 relative border-b-[0.1px] border-gray-500 '>
     <div className='min-h-[90px] rounded bg-slate-100 shadow-lg px-4 flex justify-center items-center'>
       <h1 className='text-2xl font-bold -tracking-4'>Students List </h1>   
     </div>
    </div>
    <section className='flex justify-around px-4'>
      <aside className='w-full'> <label htmlFor="">Rows per page</label>
        <select name="" id="" className='border-[2px] border-gray-500 p-2 w-40'>
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
          <option value="">40</option>
          <option value="">50</option>
          <option value="">60</option>
          <option value="">70</option>
          <option value="">80</option>
          <option value="">90</option>
          <option value="">100</option>
        </select> </aside>
      <aside className='w-full'> 
      <div className='relative'>
      <input type="search" name="" placeholder='search here' className='border-[2px] border-gray-300 p-2 w-45 pl-10 rounded' />
      <IoIosSearch className='absolute top-3 left-2' />
      </div>

      </aside>
    </section>
    
    <div class="table-container px-4">
    <table class="table">
      <thead class='tablehead'>
        <tr class='tablerow'>
          <th class='table-header'>Roll No.</th>
          <th class='table-header'>Name</th>
          <th class='table-header'>Mobile</th>
          <th class='table-header'>Email</th>
          <th class='table-header'>Courses</th>
        </tr>
      </thead>
      <tbody class='tbody'>
        <tr class='tablerow'>
          <td class='table-data'>1</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>2</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>3</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>4</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>5</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>6</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>7</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
        <tr class='tablerow'>
          <td class='table-data'>8</td>
          <td class='table-data'>Shubham</td>
          <td class='table-data'>6202214935</td>
          <td class='table-data'>shubham@1234gmail.com</td>
          <td class='table-data'>B.Tech</td>
        </tr>
      </tbody>
    </table>
  </div>

    </div>

    
  )
}

export default Student
