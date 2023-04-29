import React from "react";
import AnimatedBg from "../components/AnimatedBg";
import SettingsNavBar from "../components/SettingsNavBar";
import SideBar from "../components/SideBar"
import Footer from "../components/Footer";

class Settings extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-page-light-dark to-page-dark w-full h-full">
            <AnimatedBg />
            <div className="page-container absolute top-0 left-0 z-10 px-20 overflow-x-hidden overflow-y-auto">
                <SettingsNavBar />
                <div className="flex mt-12 gap-16 mb-16">
                    <SideBar />
                    
                </div>
                <Footer />
            </div>
            
            </div>
        );
    }
}

export default Settings;
