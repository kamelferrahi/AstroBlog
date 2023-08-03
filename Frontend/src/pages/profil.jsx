import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import AnimatedBg from "../components/AnimatedBg";
import filterIcon from "../assets/icons/filter.png";
import searchIcon from '../assets/icons/search.png'
import Contacts from "../components/Contacts";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import "../styles/pages/feed.css";
import { useNavigate } from "react-router-dom";







function Profil() {
    document.title = "Astroblog | Feed 🚀";
    const [articles, setArticles] = useState([]);
    const [profile, setProfile] = useState();
    const [prevProfile, setPrevProfile] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            var result = await fetch("http://localhost:5000/articles", { credentials: "include" });
            if (result.status === 401 || result.status === 403) {
                const data = await fetch("http://localhost:5000/refresh", { credentials: "include" });
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
            const result = await fetch(`http://localhost:5000/user/${profile.id}`, { credentials: "include" });
            result.json().then(data => { setProfile(prevalue => prevalue = { ...prevalue, ...data }); localStorage.setItem('userInfo', JSON.stringify(profile)); });
        });
        if (JSON.stringify(profile) != JSON.stringify(prevProfile)) fetchProfile();
    }, [profile]);

    console.log(profile)
    console.log(articles)

    return (
        <>
            { articles && profile?.fullname ?
                <div id="feed" className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
                    <AnimatedBg />
                    <div className="relative z-10">
                        <NavBar profile={ profile } />

                        <div className="px-20 grid grid-cols-8 grid-rows-1 gap-8 mt-4 mb-16 mx-16">
                            <div className="col-span-2 cursor-pointer">
                                <img src={ profile?.img ? profile.img : "" } alt="profile" className="rounded-full h-[120px] w-[120px] lg:h-[240px] lg:w-[240px]  object-cover" />
                            </div>
                            <div className="col-span-5 flex flex-col w-full p-6">

                                <h1 className="text-4xl text-white font-semibold mb-12">Touahria Yacine</h1>
                                <h4 className="text-description text-xl">Bio</h4>
                                <div className="flex flex-col w-full mt-4">
                                    <h3 className="text-white text-xl">Descreption</h3>
                                </div>
                                <div className="flex justify-start mt-14 lg:ml-6">
                                    <h1 className="text-lg text-description font-semibold">12K Followers, 13M Likes, 78K Articles</h1>
                                </div>

                            </div>
                            <div className="col-span-1">
                                <button className="border-2 rounded-md border-white text-white text-lg text-medium px-8 lg:px-14 py-2">follow</button>
                            </div>
                        </div>

                        <div className="px-20 grid grid-cols-8 grid-rows-1 gap-8 mt-4 mb-16">
                            <div className="col-span-1"></div>
                            <div className="col-span-5 flex flex-row items-center border border-feed-border border-2 p-4 rounded-md gap-2">
                                <img src={ searchIcon } alt="search" className="h-[20px] w-[20px] opacity-[.7]" />
                                <form className="flex flex-row items-center justify-between w-full gap-2">
                                    <div className="w-full">
                                        <input type="text" placeholder="Click to search ..." className="w-full outline-none border-none bg-transparent text-white" />
                                    </div>
                                    <div>
                                        <img src={ filterIcon } alt="filter" className="h-[20px] w-[20px] opacity-[.7] cursor-pointer" />
                                        {/* filters container with inputs */ }
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="px-20 grid grid-cols-8 grid-rows-2 gap-8 mt-4 mb-16">

                            <div className="col-span-1"></div>

                            <Feed articles={ articles } profil={ true } />

                            <div className="col-span-2 h-full w-full relative">
                                <Contacts onlyMycommunities={ true } />
                            </div>


                        </div>




                        <Footer />
                    </div>
                </div > : <span>loading...</span>
            }
        </>

    );
}

export default Profil