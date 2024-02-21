import { useState } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Student from './Pages/Student.jsx';
import Teachers from './Pages/Teachers.jsx';
import Registration from './Pages/Registration.jsx';



function App() {
  

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teachers/>} />
          <Route path="/registration" element={<Registration />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
