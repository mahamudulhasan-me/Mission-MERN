import React from "react";
import { Link } from "react-router-dom";
import "./friend.css";
const Friend = ({ friend }) => {
  const { id, name, email, phone, website } = friend;
  return (
    <div className="friend">
      <p>{id}</p>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <button>
        <Link to={`/friends/${id}`}>See Details</Link>
      </button>
    </div>
  );
};

export default Friend;
