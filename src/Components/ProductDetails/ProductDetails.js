import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

 const  ProductDetails=()=> {
    const { id } = useParams();
    const [item, setItem] = useState([]);



useEffect(()=>{
    const getProductDetails= async () => {

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
    }
    getProductDetails();
}, [id]);



  return (
    <div>
    <div>
    <img  alt="product" src={item.image} width="250" />
    <span> in {item.category}</span>


<h5>
    {item.title}
</h5>

Rating {item.rating && item.rating.rate}

<div>
    ${item.price}
</div>
</div>
<p >{item.description}</p>

    </div>
  )
}

export default ProductDetails