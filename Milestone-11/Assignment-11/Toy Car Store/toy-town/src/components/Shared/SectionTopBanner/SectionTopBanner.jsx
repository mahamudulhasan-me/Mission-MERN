import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner/smallbanner1.jpg";

const SectionTopBanner = ({ sectionName, sectionTitle }) => {
  return (
    <div data-aos="zoom-in" className="relative">
      <img src={banner} alt="" />
      <div className="absolute top-0 bottom-0 left-1/2 md:left-[30%] right-0  flex justify-center items-center">
        <div className="">
          <h2 className="text-sec font-nunito text-xl md:text-4xl">
            {sectionTitle}
          </h2>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </Link>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                {sectionName}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTopBanner;
