import React from "react";
import useAuth from "../../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-semibold font-cinzel">
        Hi, Welcome back{" "}
        <span className="text-violet-700">{`${user.displayName}`}!</span>
      </h2>
    </div>
  );
};

export default UserHome;
