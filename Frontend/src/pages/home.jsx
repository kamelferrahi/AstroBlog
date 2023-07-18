import React, { useState, useEffect } from "react";
import FeedNavBar from "../components/FeedNavBar";
import AnimatedBg from "../components/AnimatedBg";
import TopArticles from "../components/TopArticles";
import Banners from "../components/Banners";
import Contacts from "../components/Contacts";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import "../styles/pages/feed.css";


function Home() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            const result = await fetch("http://localhost:5000/articles");
            result.json().then(json => {
                setArticles(json);
            })
        };
        fetchArticles();
    }, []);

    return (
        <>
            {articles ?
                <div id="feed" className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
                    <AnimatedBg />
                    <div className="relative z-10">
                        <FeedNavBar />
                        <TopArticles />
                        <div className="px-20 grid grid-cols-8 grid-rows-1 gap-8 mt-4 mb-16">
                            <Banners />
                            <Feed articles={articles} />
                            <div className=" col-span-2 h-full w-full relative">
                                <Contacts />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div> : <span>loading...</span>
            }
        </>

    );
}

export default Home;
