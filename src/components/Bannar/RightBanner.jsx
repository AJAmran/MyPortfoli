import React from "react";
import bannerImg from '../../assets/myPhoto2.png'
const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[600px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
