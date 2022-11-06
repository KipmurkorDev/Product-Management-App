import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MyImage from '../../images/swater.jpeg'

import ".//Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([]);
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "women's clothing", text: "women's clothing" },
    { value: "men's clothing", text: "men's clothing" },
    { value: "jewelery", text: "jewelery" },
    { value: "electronics", text: "electronics" },
  ];

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState([]);
  const [isActive, setIsActive] = useState({});
  const [description, setDescription] = useState("");

  const newPoduct = () => {
    setItem([
      {
        title: title,
        category: category,
        price: price,
        image: MyImage,
        description: description,
      },
    ]);
    handSubmit();
  };

  console.log(item);

  const handleModal = () => {
    setIsActive({
      visibility: "visible",
      opacity: "1",
    });
  };
  const onOptionChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandle = () => {
    setIsActive({
      visibility: "hidden",
      opacity: "0",
    });
  };

  const handSubmit = () => {
    setData([...item, ...data]);

    submitHandle();
  };
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      setFilter(data);
    };
    getItems();
  }, []);


  

  const filterData = (cate) => {
    const categorized = data.filter((y) => y.category === cate);
    setFilter(categorized);
  };

  return (
    <div>
      <div className="grid-1">
        <div className="addtext">
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="click-me" onClick={handleModal}>
            Add Task +{" "}
          </label>

          <div className="content" style={isActive}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="category">Category:</label>
            <select
              id="priority"
              value={category}
              onChange={onOptionChangeHandler}
            >
              {options.map((category) => (
                <option value={category.value}>{category.text}</option>
              ))}
            </select>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="submit"
              onClick={() => {
                newPoduct();
              }}
            />
          </div>
        </div>
        </div>
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
