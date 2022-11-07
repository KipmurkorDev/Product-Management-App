import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "../Form/Form";
import ".//Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([]);
  const [query, setQuery] = useState(0);


  const handSubmit = (formInputs) => {
    console.log(formInputs);
    setData([...[formInputs], ...data]);
    setFilter(data);
    console.log(data);
  };


  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${query}`
      );
      const data = await response.json();
      setData(data);
      setFilter(data);
    };
    getItems();
  }, [query]);

  const removlist = [...filters];

  const deleHandler = (num) => {
    console.log(num);
    removlist.splice(num, 1);

    setFilter(removlist);
  };
  const filterData = (cate) => {
    if (cate === "all") {
      setFilter(data);
    } else {
      const categorized = data.filter((y) => y.category === cate);
      setFilter(categorized);
    }
  };

  return (
    <div>
      <div className="grid-1">
        <div className="btn">
          <button onClick={() => setFilter(data)}>Home</button>
          <select
            onChange={(e) => {
              filterData(e.target.value);
            }}
          >
            <option value="all">Categories</option>
            <option value="women's clothing">Women Clothing</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>

          <select
            value={query}
            onChange={(e) => {
              setQuery(parseInt(e.target.value));
            }}
          >
            <option value="0">Limits</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <Form sendData={handSubmit}/>
      </div>

      <div className="products">
        {filters.map((product, index) => {
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
              <div>
                <button
                  onClick={() => {
                    deleHandler(index);
                  }}
                >
                  Delete
                </button>
                <NavLink to={`/ProductDetails/${product.id}`}>
                  <button> Details</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
