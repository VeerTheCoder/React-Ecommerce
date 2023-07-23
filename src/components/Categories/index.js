import React, { useEffect, useState } from "react";
import Featurecard from "../Features";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategory(data);
    };
    fetchCategories();
  }, []);

  if (category.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Featurecard cards={category} />
    </div>
  );
};

export default Categories;
