
import React, { useState } from 'react';

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="product-filter">
      <select onChange={handleCategoryChange}>
        <option value="">Filter by category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default ProductFilter;
