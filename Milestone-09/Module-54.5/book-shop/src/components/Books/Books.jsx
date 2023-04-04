import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="grid grid-cols-4">
      {books.map((book) => {
        return (
          <div>
            <img src={book.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
