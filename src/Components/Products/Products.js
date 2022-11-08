import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import ".//Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState();

  const handSubmit = (formInputs) => {
    console.log(formInputs);
    setData([...[formInputs], ...data]);
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products?${query}`
      );
      const data = await response.json();

      setData(data);
      setProducts(data);
    };
    getItems();
  }, [query]);

  // delete methods
  const removlist = [...products];

  const deleHandler = (num) => {
    console.log(num);
    removlist.splice(num, 1);

    setProducts(removlist);
  };
  // filter by category
  const filterData = (cate) => {
    if (cate === "all") {
      setProducts(data);
    } else {
      const categorized = data.filter((y) => y.category === cate);
      setProducts(categorized);
    }
  };

  const sortdata = (sortValue) => {
    if (sortValue === "desc") {
      axios.get("https://fakestoreapi.com/products?sort=desc").then((json) => {
        setProducts(json.data);
      });
    } else {
      axios.get("https://fakestoreapi.com/products?sort=asc").then((json) => {
        setProducts(json.data);
      });
    }
  };
  return (
    <div>
      <div className="grid-1">
        <div className="btn">
          <button onClick={() => setProducts(data)}>Home</button>
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
              setQuery(`limit=${parseInt(e.target.value)}`);
            }}
          >
            <option>Limits</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>

          <select
            onChange={(e) => {
              sortdata(e.target.value);
            }}
          >
            <option>Sort</option>
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </div>
        <Form sendData={handSubmit} />
      </div>

      <div className="products">
        {products.map((product, index) => {
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
