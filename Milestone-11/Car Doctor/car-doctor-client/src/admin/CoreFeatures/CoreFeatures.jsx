import React from "react";
import { toast } from "react-toastify";

const CoreFeatures = () => {
  const submitFeatures = (e) => {
    e.preventDefault();
    const features_name = e.target.features_name.value;
    const features_image = e.target.features_image.value;
    const features = { features_name, features_image };
    fetch(`http://localhost:5050/admin/features`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(features),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Feature Inserted");
        }
      });
    e.target.reset();
  };
  return (
    <div className="w-2/5 mx-auto">
      <h2 className="text-2xl text-center">Add Features</h2>
      <form onSubmit={submitFeatures} className="form-control space-y-5">
        <label className="input-group input-group-vertical">
          <span>Feature Name</span>
          <input
            type="text"
            name="features_name"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Feature Image</span>
          <input
            type="text"
            name="features_image"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
        <input type="submit" value="Submit" className="myPrimary-btn" />
      </form>
    </div>
  );
};

export default CoreFeatures;
