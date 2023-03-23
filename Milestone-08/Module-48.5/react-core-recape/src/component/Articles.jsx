import React from "react";
import "../App.css";

const Articles = () => {
  return (
    <div className="blog">
      <h1 style={{ color: "green", fontWeight: 600, textAlign: "left" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <h4>Author: Mahamudul hasan, Date: 10.02.22</h4>
      <p style={{ textAlign: "left", color: "red", marginTop: "10px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea
        pariatur, nisi iste neque eligendi tempore nesciunt placeat ullam veniam
        doloribus sed dolores, odio mollitia, quod modi! Beatae, consequatur
        recusandae!
      </p>
    </div>
  );
};

export default Articles;
