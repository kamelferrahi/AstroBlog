import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import bellIcon from "../assets/icons/bell-ring.png";
import { useNavigate } from "react-router-dom";

function NavBar({ profile }) {
    const navigate = new useNavigate();

    const [notifications, setNotifications] = useState(["hello world"]);

    const notify = () => {
        if (notifications.length === 0) {
            return <div></div>;
        } else {
            return <div id="notifications" className="h-[10px] w-[10px] rounded-[10px] bg-light-pink absolute right-0 top-0"></div>;
        }
    }

    return (
        <div className="flex flex-row items-center justify-between gap-4 py-10 px-20" >
            <div className="flex flex-col items-center justify-center" onClick={() => { navigate("/home") }}>
                <img src={logo} alt="logo" className="h-12 w-12 -rotate-logo" />
                <span className="logo font-semibold text-sm text-white">Astrotech</span>
            </div>
            <div className="flex items-center gap-8">
                <div className="relative cursor-pointer">
                    <img src={bellIcon} alt="bell" className="h-6 w-6" />
                    {notify()}
                </div>
                <div className="cursor-pointer">
                    <img src={profile?.img ? profile.img : ""} alt="profile" className="rounded-full h-[60px] w-[60px] object-cover" />
                </div>
            </div>

        </div>
    );

}

export default NavBar;