import React from "react";
import { LuTrash } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";

const MyGroupsPagesTableRow = ({ group }) => {
  return (
    <tr key={group.id} className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.name}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.category}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.members}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.location}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.createdDate}
      </td>
      <td className="px-6 py-4 flex justify-end gap-2">
        <button className="bg-[#C68EFD] hover:bg-[#b07bec] text-white text-sm px-4 py-2 rounded transition cursor-pointer">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyGroupsPagesTableRow;
