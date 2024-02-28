import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Sidebar from "../Components/Sidebar";
import Student from "../Pages/Student";
import Teachers from "../Pages/Teachers";
import Registration from "../Pages/Registration";
import ProfileForm from "../Components/ProfileForm";
import Notification from "../Pages/Notification";
import Courses from "../Pages/Courses";
import ChangePassword from "../Components/ChangePassword";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path="/student"
          element={
            <Sidebar>
              <Student />
            </Sidebar>
          }
        />
        <Route
          path="/teacher"
          element={
            <Sidebar>
              <Teachers />
            </Sidebar>
          }
        />
        <Route
          path="/registration"
          element={
            <Sidebar>
              <Registration />
            </Sidebar>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <Sidebar>
              <ProfileForm />
            </Sidebar>
          }
        />
        <Route
          path="/dashboard/profile/changepassword"
          element={
            <Sidebar>
              <ChangePassword />
            </Sidebar>
          }
        />
        <Route
          path="/notifications"
          element={
            <Sidebar>
              <Notification />
            </Sidebar>
          }
        />
        <Route
          path="/courses"
          element={
            <Sidebar>
              <Courses />
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
