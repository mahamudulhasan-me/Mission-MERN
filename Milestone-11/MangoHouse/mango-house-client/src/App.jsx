import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const App = () => {
  const handleAddedMango = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const place = form.place.value;
    const quantity = form.quantity.value;
    const mangoProduct = { name, place, quantity };

    fetch(`http://localhost:7070/mangos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mangoProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Added New Mango");
        }
      });
  };
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <h2 className="text-5xl text-green-500 font-semibold">
        Welcome to Mango House
      </h2>
      <form
        onSubmit={handleAddedMango}
        className="w-1/2 text-center flex flex-col justify-center space-y-3 items-center mt-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Mango Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Place"
          name="place"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Number of Mango"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="btn btn-success w-1/2">Add Mango</button>
      </form>
      <div className="w-80 text-right mt-5">
        <Link to={"/allMango"}>
          {" "}
          <button className="btn btn-sm btn-outline btn-secondary">
            See All Mango
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
