import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Storecontext } from "../context/Storecontext";
import "./ProductDetail.css";

function ProductDetail() {
  const {id}=useParams();//extract the id from the url
  const {apiList}=useContext(Storecontext);
  const product = apiList.find((item) => item.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
       <img className="product-image" src={product.image} alt={product.title} />
       <div className="product-info">
      <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>
    </div>
  );

}

export default ProductDetail;
