import React from "react";
import commentsIcon from "../assets/icons/comment.png";

function Comments({ comments }) {
    const createComments = () => {
        return comments.map(function (comment) {
            return (
                <div className="flex flex-row justify-start items-start mt-8 gap-4" key={"comment" + comment.user_name + comment.date + comment.time}>
                    <img src={comment.user_pic} alt="user" className="h-[30px] w-[30px] rounded-full object-cover" />
                    <div className="w-full">
                        <div className="flex flex-row items-start justify-between">
                            <div className="mb-2">
                                <span className="block text-small-subtitle text-white font-semibold">{comment.user_name}</span>
                                <span className="block text-mini-text text-subtitle font-medium">{comment.user_publications} publications, {comment.user_likes} likes</span>
                            </div>
                            <span className="block text-mini-text text-subtitle font-medium">{comment.date} {comment.time}</span>
                        </div>
                        <p className="text-description font-base text-small-subtitle">{comment.text}</p>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="mt-12 mb-4">
            <div className="border-b-2 border-feed-border pb-2 flex flex-row justify-start items-center gap-4">
                <img src={commentsIcon} alt="comment" className="h-[25px] w-[25px] block" />
                <span className="block text-white font-semibold text-card-title">Comments</span>
            </div>
            {createComments()}
        </div>
    );
}
export default Comments;