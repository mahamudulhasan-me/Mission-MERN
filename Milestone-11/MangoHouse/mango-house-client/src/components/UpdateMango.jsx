import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateMango = () => {
  const mango = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const place = form.place.value;
    const quantity = form.quantity.value;
    const updatedMango = { name, place, quantity };
    console.log(updatedMango);
    fetch(`http://localhost:7070/mangos/${mango._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMango),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");
        }
      });
  };
  return (
    <div className="min-h-screen w-4/5 mx-auto pt-20 flex justify-center ">
      <form onSubmit={handleSubmit} className="form-control">
        <h2 className="text-3xl font-semibold text-rose-600">
          Update {mango.name}&apos;s info
        </h2>
        <div className="mt-10 space-y-4 text-xl">
          <label className="input-group input-group-vertical">
            <span>Name</span>
            <input
              type="text"
              name="name"
              defaultValue={mango.name}
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Place</span>
            <input
              type="text"
              name="place"
              defaultValue={mango.place}
              className="input input-bordered"
            />
          </label>
          <label className="input-group input-group-vertical">
            <span>Quantity</span>
            <input
              type="number"
              name="quantity"
              defaultValue={mango.quantity}
              className="input input-bordered"
            />
          </label>
          <button className="w-full btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMango;
