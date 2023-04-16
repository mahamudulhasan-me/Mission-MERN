import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user && <span>{user.displayName}</span>}'s reply to your comment.
    </div>
  );
};

export default Home;
