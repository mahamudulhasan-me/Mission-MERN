import React from "react";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  return (
    <div>
      <BlogDetails
        heading="This is blog 1 heading"
        author="Mahamudul"
        date="10.02.23"
      />
      <BlogDetails
        heading="This is blog 2 heading"
        author="Humayun  Ahamed"
        date="10.02.12"
      />
      <BlogDetails
        heading="This is blog 3 heading"
        author="Ndir  Ahamed"
        date="10.02.99"
      />
    </div>
  );
};

export default Blog;
