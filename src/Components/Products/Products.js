import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MyImage from "../../images/swater.jpeg";
import ".//Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([]);
  const [query, setQuery]=useState(0);
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

  const validate=()=>{
    if(title==="" || price==="" || category===""||description===""){
      alert(" add title for the activity")
    }
    else{
      newPoduct()
      handSubmit();
      clearForm()
    }
   }
  const clearForm=()=>{
    setTitle("")
    setPrice("")
    setCategory("")
    setDescription("")

  }


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
  };

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
      const response = await fetch(`https://fakestoreapi.com/products?limit=${query}`);
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

          
        <div className="addtext">
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="click-me" onClick={handleModal}>
            Add Task +
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
                validate();
              }}
            />
          </div>
        </div>
      </div>

      <div className="products">
        {filters.map((product, index) => {
                        // console.log(index);

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

                <button onClick={()=>{deleHandler(index)}}> Delete</button>
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
