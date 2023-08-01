import AnimatedBg from "../components/AnimatedBg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import feather from "../assets/icons/feather.png";
import WriteArticleForm from "../components/WriteArticleForm";

function WriteArticle() {
    return (
        <div id="feed" className="bg-gradient-to-b from-page-light-dark to-page-dark relative">
            <AnimatedBg />
            <div className="relative z-10">
                <NavBar />
                <div className="px-20 py-8">
                    <div className="pb-4 flex flex-row justify-start items-center gap-4">
                        <img src={feather} alt="top articles" className="h-5 w-5" />
                        <h2 className="font-semibold text-big-title text-white">New Article</h2>
                    </div>
                    <WriteArticleForm />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default WriteArticle;