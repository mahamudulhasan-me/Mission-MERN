import React from "react";
import { FaClock, FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";

const LatestBlogs = () => {
  const blogs = useLoaderData();

  return (
    <>
      <SectionTopBanner sectionName="blogs" sectionTitle="Our Latest Blog" />
      <div className="px-[10%] py-20">
        <div className="md:grid md:grid-cols-12 gap-12 items-start">
          <div className="col-span-8 md:grid grid-cols-2  gap-5">
            {blogs.map((blog) => (
              <div
                data-aos="fade-down"
                key={blog?._id}
                className="border p-2 mb-5 md:mb-0 rounded-lg"
              >
                <LazyLoad>
                  <img src={blog?.blog_image} alt="" className="rounded-lg" />
                </LazyLoad>
                <div className="flex flex-col">
                  <div className="flex justify-between  items-center my-5 border-b-2 pb-2">
                    <div className="flex  items-start gap-2 ">
                      <LazyLoad>
                        <img
                          className="w-14 h-14 rounded-full ring-2 ring-pri"
                          src={blog?.author_image}
                          alt=""
                        />
                      </LazyLoad>

                      <div className="">
                        <h3 className="font-semibold text-lg ">
                          {blog?.author}
                        </h3>
                        <p>Publish: {blog?.date}</p>
                      </div>
                    </div>
                    <h3 className="flex gap-2 items-center">
                      <FaClock className="text-sec" /> {blog?.reading_time}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h2 className="font-semibold text-xl ">{blog?.title}</h2>
                    <p className="mt-4 ml-5 text-justify">
                      {blog?.description}
                    </p>
                    <div className="flex justify-end items-center m-4 gap-1 text-xl">
                      <FaHeart className="text-sec" />
                      {blog?.like}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-4">
            <div data-aos="fade-down" className="   mb-10">
              <div className="flex justify-center items-center gap-2">
                <div className="h-0.5 w-24 bg-pri rounded-xl"></div>
                <h5 className="text-sm text-sec uppercase">Recent</h5>

                <div className="h-0.5 w-full bg-pri"></div>
              </div>

              <h2 className="text-3xl text-slate-950 font-nunito">
                Related Post
              </h2>
            </div>
            {blogs.reverse().map((blog) => (
              <div
                data-aos="fade-left"
                key={blog?._id}
                className="border p-2 rounded-lg"
              >
                <LazyLoad>
                  <img src={blog?.blog_image} alt="" className="rounded-lg" />
                </LazyLoad>
                <div className="flex flex-col">
                  <div className="flex justify-between  items-center my-5 border-b-2 pb-2">
                    <div className="flex  items-start gap-2 ">
                      <LazyLoad>
                        <img
                          className="w-14 h-14 rounded-full ring-2 ring-pri"
                          src={blog?.author_image}
                          alt=""
                        />
                      </LazyLoad>
                      <div className="">
                        <h3 className="font-semibold text-lg ">
                          {blog?.author}
                        </h3>
                        <p>{blog?.date}</p>
                      </div>
                    </div>
                    <h3 className="flex gap-2 items-center">
                      <FaClock className="text-sec" /> {blog?.reading_time}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h2 className="font-semibold text-lg ">{blog?.title}</h2>
                    <div className="flex justify-between items-center">
                      <button className="bg-pri px-3 py-2 font-semibold text-white rounded-lg">
                        Read Post
                      </button>
                      <p className="flex justify-end items-center m-4 gap-1 text-xl">
                        <FaHeart className="text-sec" />
                        {blog?.like}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
