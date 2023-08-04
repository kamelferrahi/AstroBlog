import { useState } from "react";
import filterIcon from "../assets/icons/filter.png";
import searchIcon from "../assets/icons/search.png";
import { useNavigate } from "react-router-dom";

function SearchBar({ setShowNotification }) {
    const [isFocus, setFocus] = useState(false);
    const [result, setResult] = useState([
        {
            img: "https://plus.unsplash.com/premium_photo-1675805016071-6974f69a9a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            title: "The first article",
            subtitle: "10k likes, 140 comments",
            link: "/article/1"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1675805016071-6974f69a9a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
            title: "The first article",
            subtitle: "10k likes, 140 comments",
            link: "/article/1"
        }
    ]);
    const navigate = new useNavigate();

    const handleFocus = () => {
        setFocus(true);
        setShowNotification(false);
    }
    const handleUnFocus = () => {
        setFocus(false);
    }
    const renderResult = () => {
        console.log("rendring the results");
        /*
            img , title , subtitle + link
            if profile: img , fullname , nb likes + nb publications + link
            if article: img , title , nb comments + nb reviews + link
        */
        return (
            result.map(r => {
                return (
                    <div className="flex flex-row gap-2 items-end justify-start p-2 border-b border-border-grey cursor-pointer hover:bg-input-light-grey" onClick={() => { navigate(r.link); console.log("going") }}>
                        <img src={r.img} alt="result image" className="h-[40px] w-[50px] rounded-sm" />
                        <div className="flex flex-col items-start justify-start">
                            <span className="font-semibold text-black text-small-subtitle">{r.title}</span>
                            <span className="text-grey text-smallest-text">{r.subtitle}</span>
                        </div>
                    </div>
                );
            })
        );
    }
    return (
        <div className="w-full relative h-[60px]">
            {isFocus && <div className="bg-white px-4 pt-[60px] pb-4 absolute top-0 left-0 right-0 w-full rounded-md">
                {!result ? "searching ..." : result.length == 0 ? "No result" : renderResult()}
            </div>}

            <div className={`flex flex-row items-center justify-between border ${isFocus ? "border-transparent" : "border-feed-border"} border-2 p-4 rounded-md w-full gap-2 absolute top-0 z-10`
            } >
                <img src={searchIcon} alt="search" className={`h-[20px] w-[20px] opacity-[.7] ${isFocus ? "invert" : ""}`} />
                <form action="" className="flex flex-row items-center justify-between w-full gap-2">
                    <div className="w-full">
                        <input type="text" placeholder="Click to search ..." className={`w-full outline-none border-none bg-transparent ${isFocus ? "text-black" : "text-white"}`} onFocus={handleFocus} onBlur={(e) => { e.target.value.length == 0 && handleUnFocus() }} />
                    </div>
                    {/* <div>
                    <img src={filterIcon} alt="filter" className="h-[20px] w-[20px] opacity-[.7] cursor-pointer" />
                    </div> 
                */}
                </form >
            </div >
        </div>
    );
}

export default SearchBar;