import React, { useContext } from "react";
import avatar from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      src={user && user.photoURL ? user.photoURL : avatar}
      alt="profile pic"
      width="30"
      className="rounded-full"
    />
  );
};

export default Avatar;
