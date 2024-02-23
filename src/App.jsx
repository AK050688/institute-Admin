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
          <Route path="/dashboard/profile" element={<ProfileForm />} />
          <Route path="/dashboard/profile/changepassword" element={<ChangePassword />} />
          <Route path='/notifications' element={<Notification/>}/>
        </Routes>
        {/* <ProfileForm/> */}
        {/* <Login/> */}
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
