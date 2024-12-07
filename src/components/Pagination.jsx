import React, { useState } from "react";

const Pagination = () => {
  let [isEditable, setIsEditable] = useState(false);
  return (
    <div className="container my-3">
      <div className="flex items-center justify-between text-center">
        <button className="border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] hover:bg-teal-600 hover:text-white">
          Prev
        </button>
        <div>
          {isEditable ? (
            <input type="number" value="1" />
          ) : (
            <p
              className="font-bold capitalize"
              onDoubleClick={() => {
                setIsEditable({ isEditable: !isEditable });
              }}
            >
              {1} of {100}
              <br />
              <small className="font-bold capitalize">Double tap to Edit</small>
            </p>
          )}
        </div>
        <button className="border px-3 py-1 text-[20px] font-semibold leading-[24px] duration-[0.4s] hover:bg-teal-600 hover:text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
