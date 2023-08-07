import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner.jpg";
import banner2 from "../assets/images/banner2.jpg";

function Banners() {
    const [banners, setBanners] = useState([
        banner1,
        banner2
    ]);
    return (
        <div className="w-full flex flex-col gap-8 mt-16">
            {banners.map(function (banner) { return <img key={banner + "_banner"} src={banner} className="object-cover h-full w-full" /> })}
        </div>
    );
}

export default Banners;