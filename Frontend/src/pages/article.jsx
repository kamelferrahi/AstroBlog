import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Comments from "../components/Comments";
import ReactMarkdown from "react-markdown";
import "../styles/pages/article.css";
import loadMoreImg from "../assets/icons/reload.png";
import AddComment from "../components/AddComment";
import commentsIcon from "../assets/icons/comment.png";
import Reviews from "../components/Reviews";

function Article() {
    const [theme, setTheme] = useState({ theme: "dark" });
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState(null);
    const [profile, setProfile] = useState();

    document.title = article?.title ? article.title : "Astroblog";

    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem("userInfo")));
    }, []);

    const articleId = useParams().articleId;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            var result = await fetch(`http://localhost:5000/articles/${articleId}`, { credentials: "include" });
            if (result.status === 404) {
                navigate("/E404");
            }
            if (result.status === 401 || result.status === 403) {
                const data = await fetch("http://localhost:5000/refresh", { credentials: "include" });
                if (data.status === 401 || data.status === 403) {
                    navigate("/login");
                } else {
                    result = await fetch("http://localhost:5000/articles", { credentials: "include" });
                    if (result.status !== 200) navigate("/login");
                }
            }
            result.json().then(json => {
                setArticle(json);
            });
        };
        fetchArticle();
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            const result = await fetch(`http://localhost:5000/comments/${articleId}`, { credentials: "include" });
            if (result.status === 404 || result.status === 400) {
                navigate("/E404");
            } else {
                result.json().then(json => {
                    setComments(json);
                    document.title = json.title;
                })
            }
        };
        fetchComments();
    }, []);

    const switchTheme = (event) => {
        let checkbox = event.target;
        checkbox.classList.toggle("checked");
        if (checkbox.classList.contains("checked")) { setTheme({ theme: "light" }) } else { setTheme({ theme: "dark" }); };
    }

    const createFields = (article) => {
        return article.fields.map(function (field) { return <span className="border border-light-pink text-light-pink text-xs font-medium py-1 px-2 rounded-[10px] mr-2">{field}</span> });
    }

    return (
        <>
            {
                article ? <div className="bg-gradient-to-b from-page-light-dark to-page-dark relative text-white" key={article.id}>
                    <div className="relative z-10">
                        <div className="h-96 w-full">
                            <img src={article.img} alt="article" className="object-cover w-full h-full" />
                        </div>
                        <div className="absolute top-0 left-0 right-0">
                            <NavBar profile={profile} />
                        </div>
                        <div className="px-20 py-10 flex flex-row items-start justify-between gap-4">
                            <div className="flex flex-row gap-2 items-center justify-start">
                                <span className="block text-[18px] text-md font-semibold">A a</span>
                                <input className="block w-24" type="range" min="12" max="20" step="2" />
                            </div>
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="relative">
                                    <img src={article.community_profile} alt="community" className="h-[55px] w-[55px] rounded-[27.5px] object-cover" />
                                    <img src={article.user_profile} alt="author" className="h-[20px] w-[20px] rounded-[10px] absolute bottom-0 right-0 object-cover" />
                                </div>
                                <div className="flex flex-col gap-1 justify-start items-start">
                                    <span className="block text-small-subtitle text-white font-semibold">{article.user_name} | {article.community_name}</span>
                                    <span className="block text-mini-text text-subtitle font-medium">{article.user_publications} publications, {article.user_likes} likes</span>
                                </div>
                            </div>
                            <div className="translate-x-10">
                                <div className='toggle-switch'>
                                    <label>
                                        <input type='checkbox' className="checked" onClick={event => switchTheme(event)} />
                                        <span className='slider'></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <AddComment profile={profile} />
                        <div className="grid grid-cols-6 grid-rows-1 w-full mt-10 px-20 gap-4">
                            <div></div>
                            <div className="col-span-4">
                                <div className="mb-4">
                                    {createFields(article)}
                                </div>
                                <span className="text-subtitle font-medium text-md mb-4 block">{article.date} {article.time}</span>
                                <h1 className="font-bold text-3xl">{article.title}</h1>
                                <p className="font-regular text-description text-mini-text mt-2">{article.description}</p>
                                <div className="markdown">
                                    <ReactMarkdown>{article.content}</ReactMarkdown>
                                </div>
                                <div className="mt-12 mb-4">
                                    <div className="border-b-2 border-feed-border pb-2 flex flex-row justify-start items-center gap-4">
                                        <img src={commentsIcon} alt="comment" className="h-[25px] w-[25px] block" />
                                        <span className="block text-white font-semibold text-card-title">Comments</span>
                                    </div>
                                    {comments && < Comments comments={comments} />}
                                </div>
                                {comments && comments.length > 3 &&
                                    <>
                                        <dir className="w-full flex justify-center items-center">
                                            <button className="mt-8 flex flex-row items-center justify-center gap-4 border-2 px-4 py-2 rounded-md border-feed-border bg-load-more">
                                                <img className="h-4 w-4 opacity-70" src={loadMoreImg} alt="load more" />
                                                <span className="text-description font-semibold">Load more..</span>
                                            </button>
                                        </dir>
                                    </>
                                }
                            </div>
                            <Reviews alikes={article.article_likes} adislikes={article.article_dislikes} articleId={articleId} author={article.user_name} community={article.community_name} />
                        </div>
                        <Footer></Footer>
                    </div>
                </div > : <span>loading ...</span>
            }
        </>

    );
}

export default Article;