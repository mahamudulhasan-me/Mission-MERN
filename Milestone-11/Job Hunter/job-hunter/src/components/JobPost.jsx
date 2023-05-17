import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { AuthContext } from "../provider/AuthProvider";

const animatedComponents = makeAnimated();

const JobPost = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (jobDetails) => {
    jobDetails.skill = selectOptions;
    jobDetails.userID = user.uid;

    fetch(`http://localhost:4040/jobPost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Job post successfully");
        }
      });
    console.log(jobDetails);
  };

  const colourOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  const getSelectValue = (e) => {
    setSelectOptions(e.map((skill) => skill.value));
    console.log(selectOptions);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 mx-auto border-4 border-rose-600 p-10  rounded-lg shadow-xl "
    >
      <h2 className="text-center font-semibold text-violet-600 text-4xl mb-5">
        Post Your Job
      </h2>
      <div className="grid grid-cols-12 gap-3 ">
        <input
          required
          {...register("title")}
          placeholder="Job Title"
          className="job-post-input col-span-8"
        />
        <input
          {...register("salary")}
          placeholder="Salary"
          className="job-post-input col-span-4"
        />
        <input
          {...register("vacancy")}
          placeholder="Vacancy"
          className="job-post-input col-span-4"
        />
        <select {...register("category")} className="job-post-input col-span-4">
          <option value="N/A">Select Category</option>
          <option value="Accounting/Finance"> Accounting/Finance</option>
          <option value="Design/Creative"> Design/Creative</option>
          <option value="Gen Mgt/Admin">Gen Mgt/Admin</option>
          <option value="Engineer/Architects"> Engineer/Architects</option>
          <option value="IT & Telecommunication">IT & Telecommunication</option>
          <option value="Marketing/Sales"> Marketing/Sales</option>
        </select>
        <select
          {...register("jobType", { require: true })}
          className="job-post-input col-span-4"
        >
          <option value="N/A">Select Type</option>
          <option value="onSite">On Site</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <input
          type="date"
          placeholder="Date of birth"
          {...register("deadline")}
          className="job-post-input col-span-3"
        />
        <input
          type="email"
          {...register("email")}
          placeholder="email"
          defaultValue={user?.email}
          className="job-post-input col-span-5"
        />
        <textarea
          {...register("description")}
          className="job-post-input col-span-4 row-span-6"
        ></textarea>

        <Select
          {...register("skill")}
          className=" col-span-6"
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={getSelectValue}
          defaultValue={selectOptions}
          isMulti
          options={colourOptions}
        />
        <input
          type="url"
          {...register("image")}
          placeholder="Image"
          className="job-post-input col-span-2"
        />
        <input type="submit" className="btn btn-primary col-span-8" />
      </div>
    </form>
  );
};
export default JobPost;
