import React, { useContext } from "react";
import { Storecontext } from "../context/Storecontext";
import "bootstrap/dist/css/bootstrap.min.css";
import add_icon_white from "../assets/add_icon_white.png";
import star from "../assets/star.png";
import "./Home.css";
import Pagination from "../components/Pagination";
import Slider from "../components/Slider";

function Home() {
  const { apiList, addToCart, currentPage, itemsPerPage } =
    useContext(Storecontext);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = apiList.slice(startIndex, endIndex);

  return (
    <>
       <Slider/>
    <div className="container text-center">
      <br /> <br /> <br />
    
      <div className="row" id="product">
        {currentItems.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
            <div className="card h-90 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ objectFit: "contain", height: "200px", width: "100%" }}
              />
              <img
                src={add_icon_white}
                className="cart-image"
                onClick={() => addToCart(item)}
              ></img>
              <div className="card-body">
                <h6>{item.categ}</h6>
                <h5 className="card-title fw-bold fs-6">{item.title}</h5>
                <br />
                <div className="d-flex justify-content-between">
                  <p className="text-secondary">
                    <img src={star} className="star"></img>&nbsp;
                    {item.rating.rate} ({item.rating.count})
                  </p>
                  <p className="card-text fw-bold orange-color fs-5">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Pagination />
        <br />
      </div>
    </div></>
 
  );
}

export default Home;
