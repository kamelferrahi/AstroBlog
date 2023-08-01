import titleIcon from "../assets/icons/titre.png";
function WriteArticleForm() {
    return (
        <form className="bg-red-300">
            <div>
                <label>Title*</label>
                <div>
                    <img src={titleIcon} alt="title" />
                    <input type="text" />
                </div>
            </div>
        </form>
    );
}

export default WriteArticleForm;