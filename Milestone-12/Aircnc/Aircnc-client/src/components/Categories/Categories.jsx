import React from "react";
import Container from "../Shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";
const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between items-center overflow-x-auto">
        {categories.map((category, index) => (
          <CategoryBox
            label={category.label}
            icon={category.icon}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
