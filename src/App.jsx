import { useState } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Student from './Pages/Student.jsx';
import Teachers from './Pages/Teachers.jsx';
import Registration from './Pages/Registration.jsx';
import ProfileForm from './Components/ProfileForm.jsx';
import ChangePassword from './Components/ChangePassword.jsx';
import Notification from './Pages/Notification.jsx';
import Login from './utiles/Login.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Courses from './Pages/Courses.jsx';



function App() {
  

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} /> */}
          <Route path="/" element={
            <Dashboard />} />
          <Route path="/student" element={<Student/>} />
          <Route path="/teacher" element={<Teachers/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard/profile" element={<ProfileForm />} />
          <Route path="/dashboard/profile/changepassword" element={<ChangePassword />} />
          <Route path='/notifications' element={<Notification/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
      </Sidebar>
        {/* <Login/> */}
    </BrowserRouter>
  )
}

export default App
