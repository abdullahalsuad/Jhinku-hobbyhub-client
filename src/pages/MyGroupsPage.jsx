import React from "react";
import MyGroupsTable from "../components/myGroupspage/MyGroupspage";

const MyGroupsPage = () => {
  const myGroups = [
    {
      id: 1,
      name: "Sunset Sketchers",
      category: "Drawing & Painting",
      members: 15,
      location: "Central Park",
      createdDate: "2024-03-10",
    },
    {
      id: 2,
      name: "Weekend Foodies",
      category: "Cooking",
      members: 10,
      location: "Brooklyn Kitchen",
      createdDate: "2024-02-28",
    },
    {
      id: 3,
      name: "Urban Anglers",
      category: "Fishing",
      members: 12,
      location: "Riverside Lake",
      createdDate: "2024-02-15",
    },
  ];
  return (
    <>
      <div className="min-h-screen  py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  text-center mb-10">My Groups</h1>

          {/* Table */}
          <MyGroupsTable myGroups={myGroups} />
        </div>
      </div>
    </>
  );
};

export default MyGroupsPage;
