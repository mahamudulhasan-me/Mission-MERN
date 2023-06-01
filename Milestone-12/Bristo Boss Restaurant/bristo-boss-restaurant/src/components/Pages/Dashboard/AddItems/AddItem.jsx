import React from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const { name, image, category, price, recipe } = data;
    const imgbbURL = `https://api.imgbb.com/1/upload?key=2d2ae9c5dd9e1059fbd193b5ec64e3fe`;
    let formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgbbURL, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const newMenu = {
            name,
            image: result.data.display_url,
            category,
            price: parseFloat(price),
            recipe,
          };
          axiosSecure.post(`/menu`, newMenu).then((result) => {
            if (result.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="z-50">
      <SectionHeader title={"ADD AN ITEM"} subTitle={"What's New?"} />
      <div className="px-10 bg-white py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5 add-item"
        >
          <div className="col-span-2">
            <label>Recipe Name*</label> <br />
            <input
              placeholder="Recipe name"
              {...register("name")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="">Category*</label> <br />
            <select
              defaultValue={"Dessert"}
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option value={"n/a"} disabled selected>
                Category
              </option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="drinks">Drinks</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
            </select>
          </div>
          <div>
            <label>Price*</label> <br />
            <input
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="col-span-2 row-span-4">
            <label htmlFor="">Recipe Details</label>
            <textarea
              {...register("recipe", { required: true })}
              className="w-full h-full input input-bordered"
            ></textarea>
          </div>
          <div>
            <input {...register("image")} type="file" className="mt-10 " />
          </div>{" "}
          <br />
          <button className="bg-yell w-28  text-white font-semibold flex items-center justify-center py-2">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
