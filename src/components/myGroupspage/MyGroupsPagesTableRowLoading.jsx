import React from "react";

const MyGroupsPagesTableRowLoading = () => {
  return (
    <tr className="animate-pulse transition">
      <td className="px-6 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-16 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-28 mx-auto"></div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="h-6 bg-gray-300 rounded w-24 mx-auto"></div>
      </td>
      <td className="px-6 py-4 flex justify-end gap-2">
        <div className="h-10 w-10 bg-gray-300 rounded"></div>
        <div className="h-10 w-10 bg-gray-300 rounded"></div>
      </td>
    </tr>
  );
};

export default MyGroupsPagesTableRowLoading;
