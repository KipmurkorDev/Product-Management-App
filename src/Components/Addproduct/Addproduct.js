import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const addProduct = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        image: "https://i.pravatar.cc",
        description: description,
        category: category,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={addProduct}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default AddProduct;
