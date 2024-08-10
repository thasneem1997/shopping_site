import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Storecontext } from "../context/Storecontext";
import "bootstrap/dist/css/bootstrap.min.css";
import add_icon_white from "../assets/add_icon_white.png";
import star from "../assets/star.png";
import "./Home.css";
import Pagination from "../components/Pagination";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
//function for setting up query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const { apiList, addToCart, currentPage, setCurrentPage, itemsPerPage } =
    useContext(Storecontext);

  //navigate to different routes for product based on id
  const handleCurrentProduct = (id) => {
    navigate(`/product-detail/${id}`);
  };

  const navigate = useNavigate();
  const query = useQuery();

  const category = query.get("category") || "All";
  const sort = query.get("sort") || "none";
  const search = query.get("search") || "";

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filter, sort, or search changes
  }, [category, sort, search, setCurrentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleFilterSelect = (category) => {
    query.set("category", category);
    navigate(`?${query.toString()}`);
  };

  const handleSortSelect = (sort) => {
    query.set("sort", sort);
    navigate(`?${query.toString()}`);
  };

  const handleSearch = (search) => {
    query.set("search", search);
    navigate(`?${query.toString()}`);
  };

  let filteredItems =
    category === "All"
      ? apiList
      : apiList.filter((item) => item.category === category);

  if (search) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "price_asc") {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (sort === "price_desc") {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  }

  const currentItems = filteredItems.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex-container">
        <Sidebar
          onFilterSelect={handleFilterSelect}
          onSortSelect={handleSortSelect}
          onSearch={handleSearch}
        />
        <Slider />
      </div>
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
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <img
                  src={add_icon_white}
                  className="cart-image"
                  onClick={() => addToCart(item)}
                  alt="Add to cart"
                />
                <div className="card-body">
                  <h6>{item.category}</h6>
                  <h5 className="card-title fw-bold fs-6">{item.title}</h5>
                  <br />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">
                      <img src={star} className="star" alt="Rating star" />
                      &nbsp;
                      {item.rating.rate} ({item.rating.count})
                    </p>
                    <p className="card-text fw-bold orange-color fs-5">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleCurrentProduct(item.id)}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
        <br />
      </div>
    </>
  );
}

export default Home;
