import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../provider/AuthProvider";

const MenuCard = ({ menuDetails }) => {
  const { user } = useContext(AuthContext);
  const { image, name, recipe, price, _id } = menuDetails;
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    const orderItem = { menuId: _id, name, image, price, userUid: user?.uid };
    if (user) {
      fetch(`https://bristo-boss-server-psi.vercel.app/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success(`${name} added to cart`);
            refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Need to login to add",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="group">
      <div className="overflow-hidden">
        <img src={image} className="group-hover:scale-y-110" />
      </div>
      <div className="p-2 bg-[#EFEFEF] overflow-hidden">
        <div className="border border-dashed border-slate-950 text-center flex flex-col justify-center items-center">
          <h1 className="mt-5 text-slate-950 text-xl font-cinzel font-semibold ">
            {name}
          </h1>
          <p className="text-sm text-slate-950 text-justify w-4/5">{recipe}</p>
          <button
            onClick={handleAddToCart}
            className=" mt-6 mb-4 uppercase border-b-4 rounded-xl hover:border-slate-950 text-yell bg-[#EFEFEF] py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 border-yell"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
