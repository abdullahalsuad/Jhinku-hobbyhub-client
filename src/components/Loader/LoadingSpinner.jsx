import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-[#00224D]">
        <div className="rounded-full h-16 w-16 bg-[#C68EFD] animate-ping"></div>
        <p className="mt-4 text-[#C68EFD] text-lg font-medium">Loading...</p>
      </div>
    </>
  );
};

export default LoadingSpinner;
