import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ onFilterSelect, onSortSelect, onSearch }) {
  const [search, setSearch] = useState("");
// function for handling search,sort and filter
  const handleFilterClick = (category) => {
    onFilterSelect(category);
  };

  const handleSortClick = (sort) => {
    onSortSelect(sort);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="sidebar-container">
      <h1 className="filter-title">Categories</h1>
      <hr />
      <ul>
        <li className="listitem" onClick={() => handleFilterClick("All")}>
        <a href="#product"> All</a> 
        </li>
        <li
          className="listitem"
          onClick={() => handleFilterClick("men's clothing")}
        >
         <a href="#product">  Men's Clothing</a>
        </li>
        <li
          className="listitem"
          onClick={() => handleFilterClick("electronics")}
        >
        <a href="#product">Electronics</a> 
        </li>
        <li
          className="listitem"
          onClick={() => handleFilterClick("women's clothing")}
        >
         <a href="#product">Women's Clothing </a>
        </li>
      </ul>
      <h1 className="filter-title">Sort By</h1>
      <hr />
      <ul className="sort">
        <li className="listitem" onClick={() => handleSortClick("price_asc")}>
          <a href="#product"> Price: Low to High</a>
        </li>
        <li className="listitem" onClick={() => handleSortClick("price_desc")}>
        <a href="#product">Price: High to Low</a> 
        </li>
      </ul>
      <br />
      <h1 className="filter-title">Search</h1>

      <input
        className="search"
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
    </div>
  );
}

export default Sidebar;
