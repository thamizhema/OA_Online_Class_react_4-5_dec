import React from "react";
import CategoryCard from "./CategoryCard";
import "./category.css";
export default function Category() {
  return (
    <div className="category-div">
      <CategoryCard isFav={true} />
      <CategoryCard />
      <CategoryCard isFav={true} />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard isFav={true} />
      <CategoryCard />
    </div>
  );
}
