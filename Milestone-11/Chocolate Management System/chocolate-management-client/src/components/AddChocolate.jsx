import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleChocolateAdded = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.imageURL.value;
    const country = form.country.value;
    const category = form.category.value;
    const chocolate = { name, image, country, category };

    fetch(`http://localhost:7070/chocolate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(chocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Chocolate Added!", "You clicked the button!", "success");
        }
      });
  };
  return (
    <div className="p-5">
      <div className="border-b pb-6">
        <Link
          to={"/"}
          className="flex gap-2 items-center border w-40 justify-center py-1 font-semibold"
        >
          <HiArrowLeft /> All Chocolates
        </Link>
      </div>
      <div className="  bg-[#F3F3F3] mt-10 p-5">
        <div className="text-center">
          <h3 className="font-semibold text-xl ">New Chocolates</h3>{" "}
          <p className="text-sm text-gray-500">
            Use the below form to create a new product
          </p>
        </div>
        <form
          onSubmit={handleChocolateAdded}
          className="form-control w-3/5  mx-auto font-semibold space-y-5 p-5 rounded-md"
        >
          <label className="input-group input-group-vertical">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Hot pink chocolate"
              className="input input-bordered outline-none"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Image</span>
            <input
              type="text"
              name="imageURL"
              placeholder="Enter Image URL"
              className="input input-bordered outline-none"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Country/Factory</span>
            <input
              type="text"
              name="country"
              placeholder="Enter country name"
              className="input input-bordered outline-none"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Category</span>
            <select name="category" className="select select-bordered w-full">
              <option defaultValue="N/A" disabled selected>
                Select Category
              </option>
              <option defaultValue="Premium">Premium</option>
              <option defaultValue="White chocolate">White chocolate</option>
              <option defaultValue="Milk chocolate">Milk chocolate</option>
            </select>
          </label>
          <button className="btn btn-outline w-full bg-[#955A2C] text-white font-semibold py-2 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChocolate;
