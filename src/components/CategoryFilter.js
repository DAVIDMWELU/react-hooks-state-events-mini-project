import React from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
