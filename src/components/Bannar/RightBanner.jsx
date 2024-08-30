import React from "react";
import bannerImg from "../../assets/projexts/amranhossen.jpg";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2 mt-6 md:mt-0">
      <img
        className="w-[150px] h-[200px] lgl:w-[200px] lgl:h-[250px] z-10 rounded-full"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute w-[250px] h-[250px] lgl:w-[300px] lgl:h-[300px] bg-gradient-to-r from-[#ff014d53] to-[#212428] rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default RightBanner;
