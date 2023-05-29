import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: `Do you want to make ${user.name} an admin?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Can't change`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Make Admin!", "", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <Helmet>
          <title>All User | Bristo Boss</title>
        </Helmet>
        <SectionHeader title={"MANAGE ALL USERS"} subTitle={"How Many?"} />

        <div className="bg-white p-5">
          <div className="flex text-slate-950  mb-3 font-semibold font-cinzel justify-between items-center ">
            <p className="text-2xl">Total Users: {users.length}</p>{" "}
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>

                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <p className="text-green-700 font-semibold text-sm">
                          Admin
                        </p>
                      ) : (
                        <FaUsersCog
                          onClick={() => handleMakeAdmin(user)}
                          size={24}
                          className="text-yell cursor-pointer"
                        />
                      )}
                    </td>
                    <td>
                      <FaTrashAlt
                        onClick={() => handleDelete(user._id)}
                        size={24}
                        className="text-rose-600 mx-auto cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
