import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const AllMango = () => {
  const loadedMango = useLoaderData();
  const [mangos, setMangos] = useState(loadedMango);
  const handleClick = (_id) => {
    fetch(`http://localhost:7070/mangos/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.warning("Removed Mango");
          const remainingMangos = mangos.filter((mango) => mango._id !== _id);
          setMangos(remainingMangos);
        }
      });
  };
  return (
    <div className="w-4/5 mx-auto min-h-screen pt-20">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Place</th>
              <th>Quantity</th>
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {mangos.map((mango, index) => (
              <tr key={mango._id}>
                <th>{index + 1}</th>
                <td>{mango.name}</td>
                <td>{mango.place}</td>
                <td>{mango.quantity}</td>
                <td>
                  <Link to={`/mango/${mango._id}`}>
                    <FaEdit className="text-2xl text-purple-500 mx-auto" />
                  </Link>
                </td>
                <td>
                  <FaTrashAlt
                    onClick={() => handleClick(mango._id)}
                    className="text-2xl text-rose-500 mx-auto cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-80 text-right mt-5">
        <Link to={"/"}>
          {" "}
          <button className="btn btn-sm btn-outline btn-secondary">
            Added Mango
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllMango;
