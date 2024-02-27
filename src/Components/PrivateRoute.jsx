import React, { Children } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({Children}) => {
    const isAuth = localStorage.getItem("token")
    const location = useLocation();
    // const Navigate = useNavigate()
    
    if (!isAuth) {
        return <Navigate to="login" state={location.pathname} replace/>
    }
  return Children
}

export default PrivateRoute