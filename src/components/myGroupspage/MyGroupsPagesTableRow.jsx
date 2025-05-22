import { LuTrash } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const MyGroupsPagesTableRow = ({ group, handleDelete }) => {
  return (
    <tr key={group._id} className="transition ">
      <td className="px-6 py-4 text-black text-center text-[17px]">
        <img
          src={group.groupImg}
          alt={group.groupName}
          className="h-20 w-28 object-cover rounded-md shadow-md border border-gray-200"
        />
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px]">
        {group.groupName}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px]">
        {group.category}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px]">
        {group.membersNumber}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px]">
        {group.meetingLocation}
      </td>
      <td className="px-6 py-4 text-black text-center text-[17px]">
        {group.startDate}
      </td>
      <td className="px-6 py-4">
        <Link to={`/my-groups/update/${group._id}`}>
          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Update"
            className="bg-[#C68EFD] hover:bg-[#b07bec] text-white text-sm px-4 py-2 rounded transition cursor-pointer flex items-center gap-1 mb-4"
          >
            <TbEdit size={22} />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(group._id)}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Delete"
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition cursor-pointer flex items-center gap-1"
        >
          <LuTrash size={22} />
        </button>
        <Tooltip id="my-tooltip" />
      </td>
    </tr>
  );
};

export default MyGroupsPagesTableRow;
