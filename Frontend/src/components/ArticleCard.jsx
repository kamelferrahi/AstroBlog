import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard(props) {
    const navigate = useNavigate();
    const infos = props.infos;
    const createFields = () => {
        return infos.fields.map(function (field) { return <span className="border border-light-pink text-light-pink text-xs font-medium py-1 px-2 rounded-[10px] mr-2">{field}</span> });
    }

    return (
        <div className="mt-10 border-b border-feed-border pb-4" onClick={() => { navigate(`/article/${infos.id}`); }}>
            <div className="flex flex-row items-center justify-start gap-4 cursor-pointer">
                <div className="relative">
                    <img src={infos.community_profile} alt="community" className="h-[40px] w-[40px] rounded-[20px] object-cover" />
                    <img src={infos.user_profile} alt="user" className="h-[15px] w-[15px] rounded-[8px] absolute bottom-0 right-0 object-cover" />
                </div>
                <div>
                    <span className="block text-small-subtitle text-white font-semibold">{infos.user_name} | {infos.community_name}</span>
                    <span className="block text-mini-text text-subtitle font-medium">{infos.user_publications} publications, {infos.user_likes} likes</span>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between gap-4 mt-6">
                <div className="h-full w-3/5">
                    <span className="block text-mini-text text-subtitle font-medium mb-2">{infos.date} {infos.time}</span>
                    <h3 className="text-card-title text-white font-medium mb-2 cursor-pointer">{infos.title}</h3>
                    <p className="text-base text-description mb-4 cursor-pointer">{infos.description}</p>
                    <div>{createFields()}</div>
                    <span className="block mt-2 w-full text-right text-mini-text text-subtitle font-medium">{infos.comments} comments, {infos.reviews} reviews</span>
                </div>
                <img src={infos.img} alt="article" className="h-[235px] w-2/5 object-cover cursor-pointer" />
            </div>
        </div>
    );
}

export default ArticleCard;