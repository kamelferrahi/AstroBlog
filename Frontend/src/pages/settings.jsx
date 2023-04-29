import React from "react";
import AnimatedBg from "../components/AnimatedBg";
import SettingsNavBar from "../components/SettingsNavBar";
import SideBar from "../components/SideBar"
import SettingsContent from "../components/SettingsContent";
import Footer from "../components/Footer";

class Settings extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
            <AnimatedBg />
            <div className="relative z-10">
                <SettingsNavBar />
                <div className="flex mt-12 gap-16 mb-16 ml-16">
                    <SideBar />
                    <SettingsContent /> 
                </div>
                <Footer />
            </div>
            
            </div>
        );
    }
}

export default Settings;
