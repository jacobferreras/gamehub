import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Create an array of page numbers [1, 2, ..., totalPages]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="join">
      {/* Previous Button */}
      <button
        className="join-item btn btn-sm"
        onClick={handlePrevious}
        disabled={currentPage === 1} // Disable if on the first page
      >
        «
      </button>

      {/* Page Number Buttons */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`join-item btn btn-sm ${
            currentPage === page ? "btn-active" : "" // Add btn-active if it's the current page
          }`}
          onClick={() => onPageChange(page)} // Call onPageChange with the page number
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="join-item btn btn-sm"
        onClick={handleNext}
        disabled={currentPage === totalPages} // Disable if on the last page
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
