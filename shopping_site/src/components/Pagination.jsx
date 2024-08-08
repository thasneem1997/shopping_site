import React from "react";
import { useContext } from "react";
import { Storecontext } from "../context/Storecontext";

function Pagination() {
  const { apiList, currentPage, setCurrentPage, itemsPerPage } =
    useContext(Storecontext);
  const totalPages = Math.ceil(apiList.length / itemsPerPage);
  // function for handling next previous button
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul
        className="pagination"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a
            className="page-link"
            onClick={handlePreviousPage}
            href="#"
            aria-disabled={currentPage === 1}
          >
            Previous
          </a>
        </li>
        {/* dynamically load the pages by map */}
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 && "active"}`}
          >
            <a
              className="page-link"
              onClick={() => handlePageClick(index + 1)}
              href="#"
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
          <a
            className="page-link"
            onClick={handleNextPage}
            href="#"
            aria-disabled={currentPage === totalPages}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
