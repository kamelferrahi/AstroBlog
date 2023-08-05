import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import bellIcon from "../assets/icons/bell-ring.png";
import { useNavigate } from "react-router-dom";
import Notifications from "./Notifications";
import userIcon from "../assets/icons/personne.png";
import settingsIcon from "../assets/icons/reglage.png";
import disconnectIcon from "../assets/icons/eteindre.png";


function NavBar({ profile, picturesUrl }) {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80", message: "New article in Astrotech club",
            date: new Date(Date.now()).toUTCString(),
            link: "/article/1",
            seen: false
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80", message: "New article in Astrotech club",
            date: new Date(Date.now()).toUTCString(),
            link: "/article/1",
            seen: true
        },
    ]);
    const [showNotification, setShowNotification] = useState(false);
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    const handleBellClick = () => { setShowNotification(prev => !prev); setShowDropDownMenu(false); }

    const notify = () => {
        if (notifications.length === 0) {
            return <></>;
        } else {
            return <div id="notifications" className="h-[10px] w-[10px] rounded-[10px] bg-light-pink absolute right-0 top-0"></div>;
        }
    }

    const handleLogout = async () => {
        const res = await fetch("http://localhost:5000/logout", { credentials: "include" });
        if (res.status === 200) {
            navigate("/login");
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
                    <img src={bellIcon} alt="bell" className="h-6 w-6" onClick={handleBellClick} />
                    {notify()}
                    {showNotification && <Notifications notifications={notifications} />}
                </div>
                <div onClick={() => { setShowDropDownMenu(p => !p); setShowNotification(false); }} className="min-w-[80px] relative">
                    <img src={picturesUrl + profile.img} alt="profile" className="cursor-pointer rounded-full h-[60px] w-[60px] object-cover" />
                    {
                        showDropDownMenu && <div className="absolute top-[70px] right-[20px] bg-white rounded-md px-4 py-4 z-20 w-[200px]">
                            <div onClick={() => navigate("/profile")} className="cursor-pointer p-2 flex flex-row items-center justify-between gap-4 w-full hover:bg-input-light-grey rounded-md border-b border-border-grey">
                                <span className="font-semibold text-black text-small-subtitle">My profile  </span>
                                <img src={userIcon} alt="user icon" className="h-5 w-5" />
                            </div>
                            <div onClick={() => navigate("/settings")} className="cursor-pointer p-2 flex flex-row items-center justify-between gap-4 w-full hover:bg-input-light-grey rounded-md border-b border-border-grey">
                                <span className="font-semibold text-black text-small-subtitle">Settings</span>
                                <img src={settingsIcon} alt="settings icon" className="h-5 w-5" />
                            </div>
                            <div onClick={handleLogout} className="cursor-pointer p-2 flex flex-row items-center justify-between gap-4 w-full  hover:bg-input-light-grey rounded-md border-b border-border-grey">
                                <span className="font-semibold text-black text-small-subtitle">Disconnect</span>
                                <img src={disconnectIcon} alt="disconnect icon" className="h-5 w-5" />
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>
    );

}

export default NavBar;