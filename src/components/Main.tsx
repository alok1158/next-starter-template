import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="bg-lightImage bg-cover h-screen md:bg-cover md:bg-center">
      <Image src={"http://99webpage.com/theme-review/landingpage/smooth/assets/images/masthead-img-work.png"}
      alt="skjdks"
      height={1000}
      width={1000} 
      className="w-full min-h-screen"/>
    </div>
  );
};

export default Main;
