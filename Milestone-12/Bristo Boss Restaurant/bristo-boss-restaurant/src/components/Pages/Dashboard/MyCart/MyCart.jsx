import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`https://bristo-boss-server-psi.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>My Cart | Bristo Boss</title>
      </Helmet>
      <SectionHeader title="PAYMENT HISTORY" subTitle="At a glance!" />
      <div className="bg-white p-5">
        <div className="flex text-slate-950  mb-3 font-semibold font-cinzel justify-between items-center ">
          <p className="text-2xl">Total Order: {cart.length}</p>{" "}
          <p className="text-2xl">
            Total Price: ${parseFloat(totalPrice.toFixed(2))}
          </p>{" "}
          <Link to={"/dashboard/payment"}>
            <button
              disabled={!totalPrice && true}
              className="bg-yell py-2 px-3 rounded-lg text-white"
            >
              Pay
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td onClick={() => handleDelete(item._id)}>
                    <FaTrashAlt
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
  );
};

export default MyCart;
