import React, { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import hrbanner from "../../../assets/images/banner/hrbanner.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import ToyCard from "./ToyCard";
const CategoryProducts = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Classic");
  useEffect(() => {
    fetch(
      `https://toy-town-server-mahamudulhasan-me.vercel.app/categories/${category}`
    )
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, [category]);
  return (
    <div className="px-[5%]">
      <SectionHeader section="showcase" title="Shop By Category" />
      <div className="md:grid flex flex-col-reverse md:grid-cols-12 gap-5 justify-between ">
        <div data-aos="fade-right" className="md:col-span-3">
          <div className="relative group w-full rounded-lg duration-500 overflow-hidden">
            <img
              src={hrbanner}
              alt=""
              className="rounded-lg w-full transition-all duration-700"
            />
            <div className="absolute  group-hover:top-0 group-hover:bottom-0 duration-1000  top-1/2 left-0  right-0 bottom-1/2  bg-slate-950 bg-opacity-25 z-10 "></div>
            <div className="absolute  top-0 left-0 z-20 right-0 bottom-0  text-center pt-10 ">
              <span className="bg-white text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">
                FLAT DEAL
              </span>
              <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">
                Ride On Car
              </h2>
              <p className="font-semibold text-gray-500 mb-5">
                Power Full Battery Up to 30% Off
              </p>
              <button className="underline hover:text-sec hover:tracking-widest duration-150">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-9 ">
          <Tabs>
            <TabList>
              <Tab onClick={() => setCategory("Classic")}>
                <p
                  className={`font-semibold  ${
                    category === "Classic" ? "text-sec" : ""
                  }`}
                >
                  Classic Collectibles
                </p>
              </Tab>

              <Tab onClick={() => setCategory("policePursuit")}>
                <p
                  className={`font-semibold  ${
                    category === "policePursuit" ? "text-sec" : ""
                  }`}
                >
                  Police Pursuit
                </p>
              </Tab>
              <Tab onClick={() => setCategory("Sports")}>
                <p
                  className={`font-semibold  ${
                    category === "Sports" ? "text-sec" : ""
                  }`}
                >
                  Sports Speedsters
                </p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="md:grid grid-cols-3 space-y-5 md:gap-5">
                {toys.map((toy) => (
                  <ToyCard key={toy._id} toyDetails={toy} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:grid grid-cols-3 gap-5">
                {toys.map((toy) => (
                  <ToyCard key={toy._id} toyDetails={toy} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:grid grid-cols-3 gap-5">
                {toys.map((toy) => (
                  <ToyCard key={toy._id} toyDetails={toy} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
          <div className="flex justify-center items-center my-8">
            <Link to={"allToys"}>
              <AwesomeButton type="primary">See More</AwesomeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
