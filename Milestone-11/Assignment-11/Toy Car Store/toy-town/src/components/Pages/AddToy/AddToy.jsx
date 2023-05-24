import React, { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../provider/AuthProvider";
import AdminNav from "../../Shared/AdminNav/AdminNav";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  useTitle("Add Toy");

  const onSubmit = (toyDetails) => {
    toyDetails.sellerUid = user?.uid;
    fetch(`https://toy-town-server-mahamudulhasan-me.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Toy Added Successfully!",
            "You clicked the button!",
            "success"
          );
        }
      });

  };
  return (
    <div>
      <SectionTopBanner sectionName="Add Toy" sectionTitle="Add Latest Toy" />
      <div className="bg-[#E9EDF4] min-h-screen md:px-[10%] shadow-2xl pt-10">
        <div className="md:grid grid-cols-12 justify-between  items-start ">
          <div
            data-aos="fade-right"
            className="hidden md:col-span-3 md:block bg-white  rounded-t-lg"
          >
            <AdminNav />
          </div>

          <div className="col-span-8 shadow-inner">
            <div
              // data-aos="fade-left"
              className="w-full bg-white px-5 py-[5px] rounded-t-lg"
            >
              <h2>Insert Item</h2>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Admin</a>
                  </li>
                  <li>
                    <a>Form</a>
                  </li>
                  <li>
                    <a>Insert Item</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              // data-aos="fade-left"
              className="p-8"
            >
              <div className="bg-white p-5 rounded-md">
                <h2 className="border-b text-xl pb-4">Added Latest Toy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="md:grid grid-cols-2 gap-3 mb-5">
                    <div>
                      <label className="text-sm">Toy Name</label> <br />
                      <input
                        required
                        {...register("name")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div className="flex gap-1">
                      <div>
                        <label className="text-sm">Image-1</label> <br />
                        <input
                          required
                          {...register("image1")}
                          className="toyAdd-form"
                        />
                      </div>
                      <div>
                        <label className="text-sm">Image-2</label> <br />
                        <input
                          required
                          {...register("image2")}
                          className="toyAdd-form"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm">Seller Name</label> <br />
                      <input
                        required
                        defaultValue={user?.displayName}
                        {...register("sellerName")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Seller Email</label> <br />
                      <input
                        required
                        defaultValue={user?.email}
                        {...register("sellerEmail")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Category</label> <br />
                      <select
                        required
                        {...register("category", { required: true })}
                        className="toyAdd-form"
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
                        {...register("quantity")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Price</label> <br />
                      <input
                        required
                        {...register("price")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div className="row-span-3">
                      <label className="text-sm">Description</label> <br />
                      <textarea
                        {...register("description")}
                        className="bg-[#E9EDF4] w-full md:h-[90%] h-28  px-2 rounded-md outline-none focus:border border-pri "
                      ></textarea>
                    </div>

                    <div>
                      <label className="text-sm">Rating</label> <br />
                      <input
                        required
                        {...register("rating")}
                        className="toyAdd-form"
                      />
                    </div>

                    <AwesomeButton type="primary">Submit</AwesomeButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
