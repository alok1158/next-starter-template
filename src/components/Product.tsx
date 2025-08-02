import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Product = () => {
  return (
    <div className="h-auto w-full col-span-1">
      <div className="relative group hover:bg-transparent">
        <Image
          className="group-hover:opacity-40 "
          src="https://www.radiustheme.com/demo/wordpress/themes/zugan/wp-content/uploads/2018/12/image_13-630x517.jpg"
          alt="/"
          height={1000}
          width={1000}
        />
        <div className="hidden group-hover:block absolute right-[1%] bottom-[1%] z-9">
          <AiOutlineArrowRight className="text-white text-6xl bg-black rounded-full" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold p-2">
        Electronic Port
      </h2>
    </div>
  );
};

export default Product;
