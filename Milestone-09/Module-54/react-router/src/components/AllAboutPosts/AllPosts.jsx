import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllPosts = () => {
  const allPosts = useLoaderData();

  return (
    <div>
      <h2>There al show {allPosts.length} post</h2>

      {allPosts.map((post) => {
        return (
          <div style={{ border: "1px solid", margin: "5px" }}>
            <h2>Post id: {post.id}</h2>
            <p key={post.id}>Title: {post.title}</p>
            <Link to={`/post/${post.id}`}>See Details</Link>
            {/* <button onClick={handleNavigate}>See all postss</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
