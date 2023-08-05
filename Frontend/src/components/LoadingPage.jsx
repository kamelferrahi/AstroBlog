function LoadingPage() {
    return (
        <div className="bg-gradient-to-b from-page-light-dark to-page-dark flex justify-center items-center h-full w-full">
            <div className="spinner">
                <div className="blobl blob-0"></div>
                <div className="blobl blob-1"></div>
                <div className="blobl blob-2"></div>
                <div className="blobl blob-3"></div>
            </div>
        </div>
    );
}

export default LoadingPage;