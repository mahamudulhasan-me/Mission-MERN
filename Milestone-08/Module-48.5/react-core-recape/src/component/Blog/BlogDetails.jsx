import React from "react";

const BlogDetails = (props) => {
  return (
    <div style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
      <h1>Heading: {props.heading}</h1>
      <h4>
        Author: {props.author}, Date: {props.date}
      </h4>
      <article>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, ad
        rerum veritatis, sunt minima corporis cumque repellat dolor iusto
        officia unde ipsam accusamus nisi, neque odio? Itaque, maiores.
        Laboriosam, exercitationem!
      </article>
    </div>
  );
};

export default BlogDetails;
