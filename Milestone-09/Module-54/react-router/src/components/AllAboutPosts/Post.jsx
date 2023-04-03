import React from "react";
import { useLoaderData } from "react-router-dom";

const Post = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>There are sow a single post:{id}</h2>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  );
};

export default Post;
