import React from "react";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if(currentPage<totalPages){
      onPageChange(currentPage + 1);
    }
    
  };
  return (
    <div className="container my-3">
      <div className="flex items-center justify-between text-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          className={`border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "hover:bg-teal-600 hover:text-white"
          }`}
        >
          Prev
        </button>
        <p>{`Page ${currentPage} of ${totalPages}`}</p>
        <button
           onClick={handleNext}
           disabled={currentPage === totalPages}
           aria-disabled={currentPage === totalPages}
           className={`border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] ${
             currentPage === totalPages
               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
               : "hover:bg-teal-600 hover:text-white"
           }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
