import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/student",
            name:"Students",
            icon:<FaUserAlt/>
        },
        {
            path:"/teacher",
            name:"Teachers",
            icon:<FaUserAlt/>
        },
        {
            path:"/registration",
            name:"Registration",
            icon:<FaCommentAlt/>
        },
       
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "230px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src="https://yt3.googleusercontent.com/BD6jdwY4iosy_AvzawaKCceFVt-5otehbbOgLWIlL_EVpAf1iXadeNQEuMzUEokKNPQy8QKq5A=s900-c-k-c0x00ffffff-no-rj"  style={{display: isOpen ? "block" : "none"}} className="logo w-20 h-20 rounded-full" />
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;