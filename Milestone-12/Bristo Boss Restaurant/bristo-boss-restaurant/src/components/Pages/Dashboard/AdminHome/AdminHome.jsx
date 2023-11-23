import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { BeatLoader } from "react-spinners";

import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AdminBarChart from "./AdminBarChart";
import AdminPieChart from "./AdminPieChart";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: adminStats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  let revenue = 0;
  if (adminStats.revenue) {
    revenue = adminStats.revenue[0].total;
  }
  // chart functionality

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold font-cinzel">
        Hi, Welcome back{" "}
        <span className="text-violet-700">{`${user.displayName}`}!</span>
      </h2>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="admin-stats  bg-gradient-to-l from-purple-100 via-purple-500 to-purple-900">
          <GiWallet size={36} />
          <div>
            <p className="text-3xl font-semibold">
              {isLoading ? <BeatLoader color="#36d7b7" /> : revenue}
            </p>
            <span className="font-normal">Revenue</span>
          </div>
        </div>
        <div className="admin-stats  bg-gradient-to-l from-orange-100 via-orange-400 to-orange-500">
          <BsFillPeopleFill size={36} />
          <div>
            <p className="text-3xl font-semibold">
              {isLoading ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                adminStats.customers
              )}
            </p>
            <span className="font-normal">Customers</span>
          </div>
        </div>
        <div className="admin-stats  bg-gradient-to-l from-pink-100 via-pink-400 to-pink-500">
          <SiCodechef size={36} />
          <div>
            <p className="text-3xl font-semibold">
              {isLoading ? <BeatLoader color="#36d7b7" /> : adminStats.products}
            </p>
            <span className="font-normal">Products</span>
          </div>
        </div>
        <div className="admin-stats  bg-gradient-to-l from-blue-100 via-sky-400 to-sky-500">
          <FaOpencart size={36} />
          <div>
            <p className="text-3xl font-semibold">
              {isLoading ? <BeatLoader color="#36d7b7" /> : adminStats.orders}
            </p>
            <span className="font-normal">Orders</span>
          </div>
        </div>
      </div>
      <div className=" mt-20 bg-white flex justify-center items-center">
        <AdminBarChart data={chartData} />

        <AdminPieChart data={chartData} />
      </div>
    </div>
  );
};

export default AdminHome;
