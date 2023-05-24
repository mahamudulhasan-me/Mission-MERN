import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import notfound from "../../../assets/43391-404-error-page-not-found-confused-robot.json";
const NotFound = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col">
      <Lottie
        animationData={notfound}
        loop={true}
        className="h-[calc(100vh-7rem)]"
      />
      <h1 className="text-3xl -mt-10 font-medium text-sec">
        Oh No! Error {status}
      </h1>
      {<p>{error?.message}</p>}
      <Link
        to={"./"}
        className="bg-pri w-36 h-10 mt-4 gap-2 flex justify-center items-center  text-white font-semibold rounded-sm"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
