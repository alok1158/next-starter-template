import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="bg-lightImage bg-cover h-screen md:bg-cover md:bg-center">
      <Image alt="dkjhdskj" className="w-full min-h-screen"
      height={1000}
      width={1000} 
        src="http://99webpage.com/theme-review/landingpage/smooth/assets/images/masthead-img-work.png"
       />
    </div>
  );
};

export default Main;
