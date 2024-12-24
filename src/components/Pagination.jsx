import React from "react";

const Pagination = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <div className="container my-3">
      <div className="flex items-center justify-between text-center">
        <button
          onClick={handlePrevious}
          className="border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] hover:bg-teal-600 hover:text-white"
        >
          Prev
        </button>
        <p>{`Page ${currentPage}`}</p>
        <button
          onClick={handleNext}
          className="border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] hover:bg-teal-600 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
