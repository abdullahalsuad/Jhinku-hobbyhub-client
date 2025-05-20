import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="rounded-full h-16 w-16 bg-[#C68EFD] animate-ping"></div>
        <p className=" text-[#C68EFD] text-lg font-medium text-center mt-10">
          Loading...
        </p>
      </div>
    </>
  );
};

export default LoadingSpinner;
