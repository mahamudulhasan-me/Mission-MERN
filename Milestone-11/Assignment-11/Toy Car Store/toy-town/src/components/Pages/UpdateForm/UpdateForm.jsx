import React, { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
const UpdateForm = ({ toyId }) => {
  const { register, handleSubmit } = useForm();
  const [toyInfo, setToyInfo] = useState();
  useTitle("Update Toy");
  useEffect(() => {
    fetch(
      `https://toy-town-server-mahamudulhasan-me.vercel.app/toy-details/${toyId}`
    )
      .then((response) => response.json())
      .then((data) => setToyInfo(data));
  }, [toyId]);
  const onSubmit = (updatedInfo) => {
    fetch(
      `https://toy-town-server-mahamudulhasan-me.vercel.app/update-toy-details/${toyId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated Successfully!",
            "You clicked the button!",
            "success"
          );
        }
      });
  };
  return (
    <>
      <div>
        <div className="bg-white rounded-md">
          <div className="flex justify-between border-b pb-4 items-center">
            <h2 className="text-xl">Update Your Toy</h2>{" "}
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                className="bg-rose-600 text-white text-sm px-3 py-2 cursor-pointer rounded-md"
              >
                Close
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div>
                <label className="text-sm">Toy Name</label> <br />
                <input
                  required
                  autoFocus
                  defaultValue={toyInfo?.name}
                  {...register("name")}
                  className="toyAdd-form text-lg"
                />
              </div>

              <div>
                <label className="text-sm">Image-1</label> <br />
                <input
                  required
                  defaultValue={toyInfo?.image1}
                  {...register("image1")}
                  className="toyAdd-form text-lg"
                />
              </div>

              <div>
                <label className="text-sm">Category</label> <br />
                <select
                  required
                  defaultValue={toyInfo?.category}
                  {...register("category", { required: true })}
                  className="toyAdd-form text-lg"
                >
                  <option value="N/A">Select Category</option>

                  <option value="Classic">Classic Collectibles</option>
                  <option value="policePursuit">Police Pursuit</option>
                  <option value="Sports">Sports Speedsters</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Quantity</label> <br />
                <input
                  type="number"
                  required
                  defaultValue={toyInfo?.quantity}
                  {...register("quantity")}
                  className="toyAdd-form text-lg"
                />
              </div>
              <div>
                <label className="text-sm">Price</label> <br />
                <input
                  required
                  defaultValue={toyInfo?.price}
                  {...register("price")}
                  className="toyAdd-form text-lg"
                />
              </div>
              <div className="row-span-3">
                <label className="text-sm">Description</label> <br />
                <textarea
                  defaultValue={toyInfo?.description}
                  {...register("description")}
                  className="bg-[#E9EDF4] text-lg w-full h-[90%]   px-2 rounded-md outline-none focus:border border-pri "
                ></textarea>
              </div>

              <AwesomeButton type="primary">Update</AwesomeButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
