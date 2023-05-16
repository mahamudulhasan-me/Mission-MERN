import React, { useEffect, useState } from "react";
import Job from "./Job";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);
  const [type, setType] = useState("allJobs");
  useEffect(() => {
    fetch(`http://localhost:4040/alljobs/${type}`)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, [type]);
  return (
    <div className="mt-10">
      <div className="text-center space-x-5 font-semibold">
        <button
          onClick={() => setType("allJobs")}
          className={`type-btn ${
            type == "allJobs" ? "bg-rose-600" : "bg-violet-600"
          }`}
        >
          All Jobs
        </button>
        <button
          onClick={() => setType("onSite")}
          className={`type-btn ${
            type === "onSite" ? "bg-rose-600" : "bg-violet-600"
          }`}
        >
          Remote
        </button>
        <button
          onClick={() => setType("remote")}
          className={`type-btn ${
            type === "remote" ? "bg-rose-600" : "bg-violet-600"
          }`}
        >
          On Site
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 ">
        {jobs.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Alljobs;
