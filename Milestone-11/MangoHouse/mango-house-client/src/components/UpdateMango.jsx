import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateMango = () => {
  const mango = useLoaderData();
  return (
    <div className="min-h-screen w-4/5 mx-auto mt-">
      Update {mango.name}&apos;s info
    </div>
  );
};

export default UpdateMango;
