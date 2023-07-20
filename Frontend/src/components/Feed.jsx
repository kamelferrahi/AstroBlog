import React from "react";
import ArticleCard from "./ArticleCard";
import article from "../assets/icons/article.png";
import feather from "../assets/icons/feather.png";
import loadMoreImg from "../assets/icons/reload.png";

function createArticleCards(articles) {
    return articles.map(function (article) { return <ArticleCard infos={article} /> });
}

function Feed(props) {

    return (
        <div className="col-span-5" >
            <div className="pb-4 border-b-2 border-feed-border flex flex-row justify-between items-center">
                <div className="flex flex-row items-center justify-start gap-4">
                    <img src={article} alt="articles" className="h-5 w-5" />
                    <h2 className="font-semibold text-big-title text-white">Articles</h2>
                </div>
                <button className="flex flex-row items-center justify-center gap-2 border border-white py-2 px-4 rounded-md">
                    <img src={feather} alt="write" className="h-4 w-4" />
                    <span className="text-white font-medium text-base">write</span>
                </button>
            </div>
            <div className="flex flex-col justify-start items-strech">
                <div>
                    {createArticleCards(props.articles)}
                </div>
                <button className="mt-8 flex flex-row items-center justify-center gap-4 border-2 px-4 py-2 rounded-md border-feed-border bg-load-more">
                    <img className="h-4 w-4 opacity-70" src={loadMoreImg} alt="load more" />
                    <span className="text-description font-semibold">Load more..</span>
                </button>
            </div>
        </div>
    );
}

export default Feed;