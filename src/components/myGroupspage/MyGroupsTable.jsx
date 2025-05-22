import React from "react";
import MyGroupsPagesTableRow from "./MyGroupsPagesTableRow";
import { HiH1 } from "react-icons/hi2";
import MyGroupsPagesTableRowLoading from "./MyGroupsPagesTableRowLoading";

const MyGroupsTable = ({ myGroups, handleDelete, loading }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-[#00224D]">
              <tr>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Img
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Group Name
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Category
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Members
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Location
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white">
                  Start Date
                </th>
                <th className="px-6 py-3 text-[17px] font-bold text-center text-white ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <MyGroupsPagesTableRowLoading />
              ) : (
                myGroups.map((group) => (
                  <MyGroupsPagesTableRow
                    group={group}
                    key={group._id}
                    handleDelete={handleDelete}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyGroupsTable;
