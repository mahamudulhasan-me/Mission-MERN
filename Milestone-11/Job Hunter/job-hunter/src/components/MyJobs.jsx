import React from "react";
import { useLoaderData } from "react-router-dom";
const MyJobs = () => {
  const myJobs = useLoaderData();
  return (
    <div className="my-10">
      <div className="flex justify-center items-center gap-2 mb-10">
        <input type="search" className="input  outline" />
        <input type="submit" value="Search" className="type-btn" />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Vacancy</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myJobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.category}</td>
                  <td>{job.vacancy}</td>
                  <td>{job.salary}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
