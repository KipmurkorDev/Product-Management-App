import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


import './/ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    };
    getProductDetails();
  }, [id]);

  return (
    <>
    <div className="card-1">
      <div >
        <img alt="product" src={item.image} width="250" />
        <h5>{item.title}</h5>
        <p>  {item.category}</p>
        Rating {item.rating && item.rating.rate}
        <div>${item.price}</div>
      </div>
      <p>{item.description}</p>
    </div>
    
    </>
  );
};

export default ProductDetails;
