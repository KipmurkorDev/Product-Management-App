import React, {useState} from "react";
import MyImage from "../../images/swater.jpeg";

export default function Form ({sendData}) {
  const [formInputs, setFormInputs] = useState({});
  const [isActive, setIsActive] = useState({});

  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "women's clothing", text: "women's clothing" },
    { value: "men's clothing", text: "men's clothing" },
    { value: "jewelery", text: "jewelery" },
    { value: "electronics", text: "electronics" },
  ];
  const handleInputChange = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      image: MyImage,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (
      formInputs.title === ""
    ) {
      alert(" You did not complete  the form, kindly do so.");
    } 
    else {
      submitHandle()
      console.log(formInputs);
      sendData(formInputs)    
    }
  };

  

  const submitHandle = () => {
    setIsActive({
      visibility: "hidden",
      opacity: "0",
    });
  };

  const handleModal = () => {
    setIsActive({
      visibility: "visible",
      opacity: "1",
    });
  };
  return (
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
          name="title"
          value={formInputs.title}
          onChange={handleInputChange}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formInputs.category}
          onChange={handleInputChange}
        >
          {options.map((category) => (
            <option value={category.value}>{category.text}</option>
          ))}
        </select>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formInputs.price}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formInputs.description}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          onClick={() => {
            validate();
          }}
        />
      </div>
    </div>
  );
};

