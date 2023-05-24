import React from "react";
import cat1 from "../../../assets/images/cat1.png";
import cat2 from "../../../assets/images/cat2.png";
import cat3 from "../../../assets/images/cat3.png";
import cat4 from "../../../assets/images/cat4.png";
import category1 from "../../../assets/images/products/pa2.jpg";
import category2 from "../../../assets/images/products/pc2.jpg";
import category4 from "../../../assets/images/products/pe.jpg";
import category5 from "../../../assets/images/products/pg.jpg";
import category3 from "../../../assets/images/products/ph.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const Category = () => {
  return (
    <div className="px-[10%] md:px-[5%]   my-24">
      <SectionHeader section="Category" title="Choose Favorite Category" />

      <div className="grid  space-y-5 lg:space-y-0 lg:grid-cols-5 md:grid-cols-2 gap-10">
        {/* category 1  */}
        <div data-aos="zoom-in-right" className="relative group cursor-pointer">
          <div className="mb-6 md:mb-0 p-2 ring-1 ring-gray-300 rounded-full md:w-3/4 w-[60%] mx-auto bg-white ">
            <img
              src={category1}
              alt=""
              className="rounded-full group-hover:scale-105 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-1  flex justify-center items-end  ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-slate-100 absolute top-20">
            <h4 className="mb-2 text-xl font-nunito text-slate-900 group-hover:text-pri">
              Classic
            </h4>
          </div>
        </div>
        {/* category 2  */}
        <div data-aos="zoom-in" className="relative group cursor-pointer">
          <div className="mb-6 md:mb-0 p-2 ring-1 ring-gray-300 rounded-full md:w-3/4 w-[60%] mx-auto bg-white ">
            <img
              src={category2}
              alt=""
              className="rounded-full group-hover:scale-105 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-1 flex justify-center items-end  ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-slate-100 absolute top-20">
            <h4 className="mb-2 text-xl font-nunito text-slate-900 group-hover:text-pri">
              Monster Trucks
            </h4>
          </div>
        </div>
        {/* category 3  */}
        <div data-aos="zoom-in" className="relative group cursor-pointer">
          <div className="mb-6 md:mb-0 p-2 ring-1 ring-gray-300 rounded-full md:w-3/4 w-[60%] mx-auto bg-white ">
            <img
              src={category3}
              alt=""
              className="rounded-full group-hover:scale-105 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-1 flex justify-center items-end  ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-slate-100 absolute top-20">
            <h4 className="mb-2 text-xl font-nunito text-slate-900 group-hover:text-pri">
              Police Pursuit
            </h4>
          </div>
        </div>
        {/* category 4 */}
        <div data-aos="zoom-in" className="relative group cursor-pointer">
          <div className="mb-6 md:mb-0 p-2 ring-1 ring-gray-300 rounded-full md:w-3/4 w-[60%] mx-auto bg-white ">
            <img
              src={category4}
              alt=""
              className="rounded-full group-hover:scale-105 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-1 flex justify-center items-end  ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-slate-100 absolute top-20">
            <h4 className="mb-2 text-xl font-nunito text-slate-900 group-hover:text-pri">
              Off-Road Adventure
            </h4>
          </div>
        </div>
        {/* category 5 */}
        <div data-aos="zoom-in-left" className="relative group cursor-pointer">
          <div className="mb-6 md:mb-0 p-2 ring-1 ring-gray-300 rounded-full md:w-3/4 w-[60%] mx-auto bg-white ">
            <img
              src={category5}
              alt=""
              className="rounded-full group-hover:scale-105 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-1 flex justify-center items-end  ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-slate-100 absolute top-20">
            <h4 className="mb-2 text-xl font-nunito text-slate-900 group-hover:text-pri">
              Transforming Robots
            </h4>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-24 gap-6 ">
        {/* other category 1 */}
        <div
          data-aos="fade-right"
          className="row-span-2 relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8  hover:ring-opacity-5"
        >
          <img
            src={cat1}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0  text-center pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">
              20 % OFF
            </span>
            <h2 className="text-sec  font-nunito text-3xl mt-7 duration-500 group-hover:mt-5 ">
              Trendy Kids Toys
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 2  */}
        <div
          data-aos="fade-down"
          className="relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8 hover:ring-opacity-5"
        >
          <img
            src={cat2}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-0 bottom-0  text-left pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">
              FLAT DEAL
            </span>
            <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">
              New Toy Shoes
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 3  */}
        <div
          data-aos="zoom-in"
          className="row-span-2 relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8 hover:ring-opacity-5"
        >
          <img
            src={cat4}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-0 bottom-0  text-center pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 uppercase px-2 py-1 tracking-[0.5rem] rounded-md ">
              Big Discount
            </span>
            <h2 className="text-sec  font-nunito text-3xl mt-7 duration-500 group-hover:mt-5 ">
              Kid&apos;s Toys & Games
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 4  */}
        <div
          data-aos="zoom-up"
          className="relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8 hover:ring-opacity-5"
        >
          <img
            src={cat3}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-5 bottom-0  text-right pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800  uppercase px-2 py-1 tracking-[0.5rem] rounded-md">
              On Sale!
            </span>
            <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">
              Fancy Toys
            </h2>
            <button className="underline  hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
