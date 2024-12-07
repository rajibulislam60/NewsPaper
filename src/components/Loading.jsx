import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="container my-3 flex items-center justify-between">
      <strong className="text-[26px]">Loading...</strong>

      <ClipLoader
        color="teal"
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
