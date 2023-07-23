import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xm text-blue-500 tracking-widest font-medium title-font mb-1 font-mono">
          Products
        </h2>
        <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 font-mono">
          Trending Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Home;
