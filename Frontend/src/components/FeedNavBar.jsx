import React, { useState } from "react";
import logo from "../assets/logo.svg";
import filterIcon from "../assets/icons/filter.png";
import searchIcon from "../assets/icons/search.png";
import bellIcon from "../assets/icons/bell-ring.png";
import { useNavigate } from "react-router-dom";
import Notifications from "./Notifications";

function FeedNavBar({ profile }) {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([{ id: 1, img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80", message: "Yacine has posted new article", date: new Date(Date.now()) },]);
    const [showNotification, setShowNotification] = useState(false);
    const handleBellClick = () => { setShowNotification(prev => !prev); }

    const notify = () => {
        if (notifications.length === 0) {
            return <div></div>;
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
        <div className="px-20 flex flex-row items-center justify-between gap-4 py-10">
            <div className="flex flex-col items-center justify-center">
                <img src={logo} alt="logo" className="h-10 -rotate-logo" />
                <span className="logo font-semibold text-sm text-white">Astrotech</span>
            </div>
            <div className="flex flex-row items-center justify-between border border-feed-border border-2 p-4 rounded-md w-5/6 gap-2">
                <img src={searchIcon} alt="search" className="h-[20px] w-[20px] opacity-[.7]" />
                <form action="." method="GET" className="flex flex-row items-center justify-between w-full gap-2">
                    <div className="w-full">
                        <input type="text" placeholder="Click to search ..." className="w-full outline-none border-none bg-transparent text-white" />
                    </div>
                    <div>
                        <img src={filterIcon} alt="filter" className="h-[20px] w-[20px] opacity-[.7] cursor-pointer" />
                        {/* filters container with inputs */}
                    </div>
                </form>
            </div>
            <div className="relative cursor-pointer">
                <img src={bellIcon} alt="bell" className="h-6 w-6" onClick={handleBellClick} />
                {notify()}
                {showNotification && <Notifications notifications={notifications} />}
            </div>
            <div onClick={handleLogout} className="cursor-pointer rounded-[50px] h-[60px] w-[60px]">
                <img src={profile.img} alt="profile" className="rounded-[50px] h-[60px] w-[60px] object-cover" />
            </div>
        </div>
    );

}

export default FeedNavBar;