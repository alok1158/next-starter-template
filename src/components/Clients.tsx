import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div id="client" className="w-full h-screen pt-20 md:pt-5">
      <div className="flex flex-col justify-center items-center mt-[6%] ">
        <h2 className="text-4xl font-semibold p-2">Our Happy Clients</h2>
        <h5 className="font-semibold p-4 text-lg">Clients say about our works</h5>
        <p className="p-5 w-2/3 text-center md:text-xl font-smbold">Sorem Ipsum is simply dummy text of the printing and typesetting indus try. Lorem Ipsum has been the industry’sLorem Ipsum is simply the printing dummy text of the printing.</p>
        <Image height={100} width={100} className="w-44 rounded-full" src="https://www.radiustheme.com/demo/wordpress/themes/zugan/wp-content/uploads/2018/12/testimonial.jpg" alt="/" />
      <h2 className="pt-5 text-2xl font-semibold">Julia Rose</h2>
      <p className="p-2">Creative Director</p>
      </div>
    </div>
  );
};

export default Clients;
