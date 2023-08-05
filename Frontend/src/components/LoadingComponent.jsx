import loadingIcon from "../assets/icons/loading.gif";

function LoadingComponent() {
    return (
        <div className="w-full flex justify-center items-center h-16">
            <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingComponent;