import React from "react";
import { LuTrash } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";

const MyGroupsPagesTableRow = ({ group }) => {
  return (
    <tr key={group._id} className=" transition">
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.groupName}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.category}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.membersNumber}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.meetingLocation}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px] ">
        {group.startDate}
      </td>
      <td className="px-6 py-4 flex justify-end gap-2">
        <button className="bg-[#C68EFD] hover:bg-[#b07bec] text-white text-sm px-4 py-2 rounded transition cursor-pointer">
          <TbEdit size={25} />
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition cursor-pointer">
          <LuTrash size={25} />
        </button>
      </td>
    </tr>
  );
};

export default MyGroupsPagesTableRow;
