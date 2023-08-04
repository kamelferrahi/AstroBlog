import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bellIcon from "../assets/icons/bell-ring.png";
import { useNavigate } from "react-router-dom";
import Notifications from "./Notifications";
import SearchBar from "./SearchBar";

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
            <div className="flex flex-col items-center justify-center" onClick={() => {
                window.location.reload();
            }}>
                <img src={logo} alt="logo" className="h-10 -rotate-logo" />
                <span className="logo font-semibold text-sm text-white">Astrotech</span>
            </div>
            <SearchBar />
            <div className="relative cursor-pointer">
                <img src={bellIcon} alt="bell" className="h-6 w-6" onClick={handleBellClick} />
                {notify()}
                {showNotification && <Notifications notifications={notifications} />}
            </div>
            <div onClick={handleLogout} className="cursor-pointer w-[80px]">
                <img src={profile.img} alt="profile" className="rounded-full h-[60px] w-[60px] object-cover" />
            </div>
        </div>
    );

}

export default FeedNavBar;