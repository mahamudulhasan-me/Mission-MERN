import React from "react";
import { toast } from "react-toastify";

const MeatTeam = () => {
  const submitTeamMember = (e) => {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value;
    const image = f.image.value;
    const expertOn = f.expertOn.value;
    // social profile
    const facebook = f.facebook.value;
    const twitter = f.twitter.value;
    const linkedin = f.linkedin.value;
    const instagram = f.instagram.value;
    const teamMemberInfo = {
      name,
      image,
      expertOn,
      facebook,
      twitter,
      linkedin,
      instagram,
    };

    fetch(`http://localhost:5050/admin/team`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(teamMemberInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Team member added successfully");
        }
      });

    console.log(teamMemberInfo);
  };
  return (
    <div className="w-2/5 mx-auto my-16">
      <h2 className="text-2xl text-center">Add Team Member</h2>
      <form onSubmit={submitTeamMember} className="form-control space-y-5">
        <label className="input-group input-group-vertical">
          <span>Feature Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="input input-bordered"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Image</span>
          <input
            type="text"
            name="image"
            placeholder="Image"
            className="input input-bordered"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Expert On</span>
          <input
            type="text"
            name="expertOn"
            placeholder="Expert on"
            className="input input-bordered"
          />
        </label>
        <h3 className="font-semibold underline">Enter Social Account Link</h3>
        <label className="input-group input-group-vertical">
          <span>Facebook</span>
          <input
            type="url"
            name="facebook"
            placeholder="facebook url"
            className="input input-bordered input-sm"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Twitter</span>
          <input
            type="url"
            name="twitter"
            placeholder="twitter url"
            className="input input-bordered input-sm"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>LinkedIn</span>
          <input
            type="url"
            name="linkedin"
            placeholder="linkedin url"
            className="input input-bordered input-sm"
          />
        </label>
        <label className="input-group input-group-vertical">
          <span>Instagram</span>
          <input
            type="url"
            name="instagram"
            placeholder="instagram url"
            className="input input-bordered input-sm"
          />
        </label>
        <input type="submit" value="Submit" className="myPrimary-btn" />
      </form>
    </div>
  );
};

export default MeatTeam;
