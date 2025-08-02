import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="w-full h-auto md:h-screen items-center lg:flex lg:px-2">
      <div className="flex w-full justify-center lg:h-[606px]">
        <Image
          className="p-2 w-fit"
          src="https://www.radiustheme.com/demo/wordpress/themes/zugan/wp-content/uploads/2018/12/about1.jpg"
          alt="/"
          height={1000}
          width={1000}
        />
      </div>
      <div className="p-2">
        <div className="md:relative">
          <p className="text-5xl font-thin text-slate-300 py-2 md:absolute md:-rotate-90 md:mt-[2%] lg:mt-[10%] md:ml-[72%] md:w-[49%]">
            About Us
          </p>
        </div>
        <div className="md:w-[90%]">
          <h2 className="w-full text-xl font-semibold text-black md:px-14 lg:px-0 lg:text-2xl">
            Radius Theme is one of best Web Design & Development company. We
            build creative & professional WordPress Themes & WordPress plugins.
          </h2>
          <p className="my-4 md:my-10 lg:text-xl">
            Dimply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only.
          </p>
          <p className="lg:text-xl">
            Dimply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
