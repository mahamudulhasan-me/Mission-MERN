import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./friends.css";
const Friends = () => {
  const friends = useLoaderData();

  return (
    <div>
      <h2>List of my all friends: {friends.length}</h2>
      <div className="friends">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
