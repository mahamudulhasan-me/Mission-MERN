import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const MyJobs = () => {
  const { user, loader } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState();
  const [myJobs, setMyJobs] = useState([]);

  const navigate = useNavigate();
  const url = `http://localhost:4040/myjobs/${user.uid}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jobHunter-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyJobs(data);
        } else {
          navigate("/");
        }
      });
  }, [url, user]);

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
    fetch(`http://localhost:4040/myjobsBySearch/${searchValue}`)
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  };

  return (
    <div className="my-10">
      <div className="flex justify-center items-center gap-2 mb-10">
        <input
          type="search"
          className="input  outline w-80"
          placeholder="Search your job"
          onChange={getSearchValue}
        />
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
              {loader ? (
                "loading... "
              ) : (
                <>
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
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
