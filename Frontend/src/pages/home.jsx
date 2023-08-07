import React, { useState, useEffect } from "react";
import FeedNavBar from "../components/FeedNavBar";
import AnimatedBg from "../components/AnimatedBg";
import TopArticles from "../components/TopArticles";
import Banners from "../components/Banners";
import Contacts from "../components/Contacts";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import "../styles/pages/feed.css";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";
import LoadingPage from "../components/LoadingPage";

function Home() {
    const maxArticlesPerPage = 3;
    document.title = "Astroblog | Feed 🚀";
    const [articles, setArticles] = useState([]);
    const [profile, setProfile] = useState();
    const [prevProfile, setPrevProfile] = useState();
    const host = "http://localhost:5000";
    const picturesUrl = `${host}/picture/`;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            var result = await fetch(`${host}/articles/-${maxArticlesPerPage}`, { credentials: "include" });
            if (result.status === 401 || result.status === 403) {
                const data = await fetch(`${host}/refresh`, { credentials: "include" });
                if (data.status === 401 || data.status === 403) {
                    navigate("/login");
                } else {
                    navigate("/home");
                }
            } else {
                if (result.status === 200) {
                    result.json().then(json => {
                        setArticles(json.articles);
                        setProfile({ id: json.userId });
                    });
                } else {
                    navigate("/E404");
                }
            }
        };

        fetchArticles();

    }, []);

    useEffect(() => {
        const fetchProfile = (async () => {
            setPrevProfile(profile);
            const result = await fetch(`${host}/user/${profile.id}`, { credentials: "include" });
            if (result.status == 401 || result.status == 403) navigate("/login");
            if (result.status == 404) navigate("/E404");
            result.json().then(data => setProfile({ ...profile, ...data }));
        });
        if (JSON.stringify(profile) != JSON.stringify(prevProfile)) fetchProfile();
    }, [profile]);

    return (
        <>
            {articles && profile?.fullname ?
                <div id="feed" className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
                    <AnimatedBg />
                    <div className="relative z-10">
                        <FeedNavBar profile={profile} picturesUrl={picturesUrl} host={host} />
                        <SmoothScroll />
                        <TopArticles host={host} />
                        <div className="px-20 grid grid-cols-8 grid-rows-1 gap-8 mt-4 mb-16">
                            {/* <Banners /> */}
                            <div></div>
                            <Feed articles={articles} maxArticlesPerPage={maxArticlesPerPage} setArticles={setArticles} isProfile={false} picturesUrl={picturesUrl} host={host} />
                            <div className=" col-span-2 h-full w-full relative">
                                <Contacts userId={profile.id} picturesUrl={picturesUrl} host={host} />
                            </div>
                        </div>
                        <Footer profile={profile} />
                    </div>
                </div> : <LoadingPage />
            }
        </>

    );
}

export default Home;
