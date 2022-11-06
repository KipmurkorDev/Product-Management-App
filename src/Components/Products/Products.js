import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ".//Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      setFilter(data);
      console.log(data);
    };
    getItems();
  }, []);

  const filterData = (cate) => {
    const categorized = data.filter((y) => y.category === cate);
    setFilter(categorized);
  };

  return (
    <div>
      <div>
        <button onClick={() => setFilter(data)}>All</button>
        <button onClick={() => filterData("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => filterData("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => filterData("jewelery")}>Jewelery</button>
        <button onClick={() => filterData("electronics")}>Electronics</button>
      </div>
      <div className="products">
        {filters.map((product) => {
          return (
            <div className="product-1">
              <div>
                <img
                  className="img-1"
                  src={product.image}
                  alt={product.title}
                />
                <h1> {product.title}</h1>
              </div>
              <div>
                <p>${product.price}</p>
              </div>
              <NavLink to={`/ProductDetails/${product.id}`}>
                <button> Details</button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
