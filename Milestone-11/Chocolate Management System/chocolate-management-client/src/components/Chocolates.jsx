import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import chocolate from "../assets/chocolate.png";

const Chocolates = () => {
  const initChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(initChocolates);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7070/chocolate/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainChocolates = chocolates.filter(
                (choc) => choc._id !== _id
              );
              setChocolates(remainChocolates);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="p-5 ">
        <Link
          to={"/addChocolate"}
          className="flex gap-2 items-center border w-52 justify-center py-1 font-semibold"
        >
          <HiPlus className="text-xl" />
          New Chocolate <img src={chocolate} alt="" />
        </Link>
        <div className="overflow-x-auto mt-8">
          <table className="table  w-full">
            {/* head */}
            <thead className="bg-[#EED8C6]">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chocolates.map((choc) => (
                <tr key={choc._id}>
                  <th>
                    <img src={choc.image} alt="" className="w-20 h-20" />
                  </th>
                  <td>{choc.name}</td>
                  <td>{choc.country}</td>
                  <td>{choc.category}</td>
                  <td>
                    <div className="flex gap-2">
                      {" "}
                      <Link to={`/updateChocolate/${choc._id}`}>
                        {" "}
                        <FaEdit className=" cursor-pointer bg-[#EED8C6] p-1 text-3xl rounded-sm text-orange-500" />
                      </Link>
                      <FaTrashAlt
                        onClick={() => handleDelete(choc._id)}
                        className="cursor-pointer bg-[#EED8C6] p-1 text-3xl rounded-sm text-rose-600"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Chocolates;
