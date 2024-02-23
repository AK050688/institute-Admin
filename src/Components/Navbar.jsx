import React, { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";




const Navbar = () => {
    const [profile, setProfile] = useState(false);
    const profileRef = useRef(null);

    const toggleProfile = () => {
        setProfile(!profile);
    };

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setProfile(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="text-white flex justify-between items-center p-4 mr-4 text-2xl font-bold">
            <div></div>
            <div>Admin Dashboard</div>
            <div ref={profileRef} onClick={toggleProfile} style={{ cursor: "pointer" }}>
                <CgProfile />
            </div>
            {profile && (
                <div className="flex items-end mr-6 mt-[220px] absolute right-0 z-50">
                    <div className="w-[180px] h-[170px] bg-slate-600 rounded-md">
                        <div className="flex flex-col text-[20px] font-thin mt-2 text-white text-center">
                            <div className="flex flex-row  gap-2 m-2  items-center pr-5 pl-2 border-b"><MdDashboard /> <span>Dashboard</span></div>
                            <div className="flex flex-row  gap-2 m-2  items-center pr-5 pl-2 border-b"><ImProfile /> <span>Profile</span></div>
                            <div className="flex flex-row  gap-2 m-2  items-center pr-5 pl-2 border-b"><IoMdLogOut /> <span>Logout</span></div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
