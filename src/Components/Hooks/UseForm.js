
import MyImage from '../../images/swater.jpeg'
import { useState } from "react";

const UseForm = () => {
  const [formInputs, setFormInputs] = useState({});
    const [isActive, setIsActive] = useState({});


  const handleModal = () => {
    setIsActive({
      visibility: "visible",
      opacity: "1",
    });
  };

  const submitHandle = () => {
    setIsActive([{
      visibility: "hidden",
      opacity: "0",
    }]);
  };


  const handleFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    submitHandle()

  };

  const handleInputChange = (event) => {
    setFormInputs({
      ...formInputs, image:MyImage, [event.target.name]: event.target.value,
    });
  };

  console.log(formInputs);
  return {
    handleFormSubmit,
    handleInputChange,
    formInputs,
    handleModal,
    isActive, submitHandle
  };
};

export default UseForm;
