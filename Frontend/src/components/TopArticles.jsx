import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import topArticlesIcon from "../assets/icons/trophy.png";

function TopArticles() {

    const [topArticles, setTopArticles] = useState([]);
    const navigate = new useNavigate();
    useEffect(() => {
        const url = "http://localhost:5000/articles/top";
        const fetchTopArticles = async () => {
            const result = await fetch(url, { credentials: "include" });
            if (result.status == 200) {
                result.json().then(json => setTopArticles(json));
            } else {
                navigate("/E404");
            }
        }
        fetchTopArticles();
    }, []);

    return (
        <>
            {topArticles.length === 3 && <div className="px-20 py-8">
                <div className="pb-4 border-b-2 border-feed-border flex flex-row justify-start items-center gap-4">
                    <img src={topArticlesIcon} alt="top articles" className="h-5 w-5" />
                    <h2 className="font-semibold text-big-title text-white">Top Articles</h2>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-6">
                    <div className="w-full h-full row-span-2 cursor-pointer">
                        <div className="relative">
                            <img src={topArticles[0].img} alt="article" className="h-64 w-full object-cover" onClick={() => { navigate(`/article/${topArticles[0].id}`) }} />
                            <div className="absolute bottom-3 left-5 flex flex-row gap-2">
                                {topArticles[0].fields.map(function (field) { return <span key={field} className="border border-light-pink text-light-pink text-xs font-medium py-1 px-2 rounded-[10px]">{field}</span>; })}
                            </div>
                        </div>
                        <div className="my-3 flex flex-row items-center justify-between">
                            <span className="text-subtitle font-medium text-xs">{topArticles[0].date} {topArticles[0].time}</span>
                            <span className="text-subtitle font-medium text-xs">{topArticles[0].comments} comments, {parseInt(topArticles[0].nb_likes) + parseInt(topArticles[0].nb_dislikes)} reviews</span>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-xl mb-2" onClick={() => { navigate(`/article/${topArticles[0].id}`) }}>{topArticles[0].title}</h3>
                            <p className="text-description text-base" onClick={() => { navigate(`/article/${topArticles[0].id}`) }}>{topArticles[0].description}</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-between gap-4 cursor-pointer">
                        <img src={topArticles[1].img} alt="article" className="h-48 w-1/2 object-cover" onClick={() => { navigate(`/article/${topArticles[1].id}`) }} />
                        <div className="h-full w-1/2">
                            <span className="text-subtitle font-medium text-xs">{topArticles[1].date} {topArticles[1].time}</span>
                            <h3 className="text-white font-semibold text-lg my-4" onClick={() => { navigate(`/article/${topArticles[1].id}`) }}>{topArticles[1].title}</h3>
                            <div className="flex flex-row items-center justify-start gap-2">
                                {topArticles[1].fields.map(function (field) { return <span key={field} className="border border-light-pink text-light-pink text-xs font-medium py-1 px-2 rounded-[10px]">{field}</span>; })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-between gap-4 cursor-pointer">
                        <img src={topArticles[2].img} alt="article" className="h-48 w-1/2 object-cover" onClick={() => { navigate(`/article/${topArticles[2].id}`) }} />
                        <div className="h-full w-1/2">
                            <span className="text-subtitle font-medium text-xs">{topArticles[2].date} {topArticles[2].time}</span>
                            <h3 className="text-white font-semibold text-lg my-4" onClick={() => { navigate(`/article/${topArticles[2].id}`) }}>{topArticles[2].title}</h3>
                            <div className="flex flex-row items-center justify-start gap-2">
                                {topArticles[2].fields.map(function (field) { return <span key={field} className="border border-light-pink text-light-pink text-xs font-medium py-1 px-2 rounded-[10px]">{field}</span>; })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default TopArticles;