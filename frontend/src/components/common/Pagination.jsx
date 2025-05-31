import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
    <div className="join bg-neutral-700 ">
      <button
        className="join-item btn btn-sm bg-neutral-700 text-white"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        «
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`join-item btn btn-sm bg-neutral-700 ${
            currentPage === page ? "btn-active text-red-500" : "text-white"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="join-item btn btn-sm bg-neutral-700 text-white"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
