import React from "react";

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
        <>
            {createComments()}
        </>
    );
}
export default Comments;