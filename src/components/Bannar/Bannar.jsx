import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Bannar = () => {

  return (
    <section
      id="home"
      className="w-full py-10 pb-20 flex gap-5 flex-col md:flex-row items-center border-b-[1px] border-b-black"
    >
      <LeftBanner></LeftBanner>
      <RightBanner></RightBanner>
    </section>
  );
};

export default Bannar;
