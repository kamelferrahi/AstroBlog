import AnimatedBg from "../components/AnimatedBg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import feather from "../assets/icons/feather.png";
import WriteArticleForm from "../components/WriteArticleForm";
import { useState, useEffect } from "react";
import SmoothScroll from "../components/SmoothScroll";

function WriteArticle() {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem("userInfo")));
    }, []);

    return (
        <>
            {profile ? <div id="feed" className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
                < AnimatedBg />
                <div className="relative z-10">
                    <NavBar profile={profile} />
                    <SmoothScroll />
                    <div className="px-20 py-8">
                        <div className="pb-8 flex flex-row justify-start items-center gap-4">
                            <img src={feather} alt="top articles" className="h-5 w-5" />
                            <h2 className="font-semibold text-big-title text-white">New Article</h2>
                        </div>
                        <WriteArticleForm profile={profile} />
                    </div>
                    <Footer />
                </div>
            </div > : <div>"Loading..."</div>
            }
        </>
    );
}

export default WriteArticle;