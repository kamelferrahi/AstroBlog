import React from "react";
import FeedNavBar from "../components/FeedNavBar";
import AnimatedBg from "../components/AnimatedBg";
import TopArticles from "../components/TopArticles";
import Banners from "../components/Banners";
import Contacts from "../components/Contacts";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import "../styles/pages/feed.css";

class Home extends React.Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-page-light-dark to-page-dark w-full h-full">
                <AnimatedBg />
                <div className="page-container absolute top-0 left-0 z-10 px-20  overflow-x-hidden overflow-y-auto">
                    <FeedNavBar />
                    <TopArticles />
                    <div className="grid grid-cols-8 grid-rows-1 gap-8 mt-4 mb-16">
                        <Banners />
                        <Feed />
                        <Contacts />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
