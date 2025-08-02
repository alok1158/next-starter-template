import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Product from "./Product";

const Products = () => {
  return (
    <div id="project" className="w-full h-auto p-11 bg-slate-50">
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-4xl font-semibold text-black">Feature works</h1>
        <h3 className="text-xl p-3">Made with Passion</h3>
        <div className="w-auto h-auto md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 z-5 ">
          <div className="my-1 md:col-span-2 lg:col-span-3"></div>
           <Product/>            
           <Product/>            
           <Product/>            
           <Product/>            
           <Product/>            
           <Product/>            
        </div>
        <div className="w-full text-center justify-center flex py-10">
          <button className="border border-black rounded-md p-3 flex uppercase hover:bg-black hover:text-white">
            See More Work <AiOutlineArrowRight className="text-center justify-center m-1 ml-3" /> 
            </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
