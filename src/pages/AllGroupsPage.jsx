import GroupCard from "../components/allGroupsPage/GroupCard";

const AllGroupsPage = () => {
  const groups = [
    {
      id: 1,
      name: "Sunset Sketchers",
      category: "Drawing & Painting",
      members: 15,
      location: "Central Park",
      image: "https://picsum.photos/seed/art/400/300 ",
    },
    {
      id: 2,
      name: "City Runners Club",
      category: "Running",
      members: 22,
      location: "Downtown Trail",
      image: "https://picsum.photos/seed/run/400/300 ",
    },
    {
      id: 3,
      name: "Weekend Foodies",
      category: "Cooking",
      members: 10,
      location: "Brooklyn Kitchen",
      image: "https://picsum.photos/seed/cooking/400/300 ",
    },
    {
      id: 4,
      name: "Night Owl Readers",
      category: "Reading",
      members: 8,
      location: "Online",
      image: "https://picsum.photos/seed/book/400/300 ",
    },
    {
      id: 5,
      name: "Mobile Game Masters",
      category: "Video Gaming",
      members: 30,
      location: "Discord",
      image: "https://picsum.photos/seed/game/400/300 ",
    },
    {
      id: 6,
      name: "Urban Anglers",
      category: "Fishing",
      members: 12,
      location: "Riverside Lake",
      image: "https://picsum.photos/seed/fish/400/300 ",
    },
  ];

  return (
    <>
      <div className="min-h-screen  py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  text-center mb-10">
            Explore All Groups
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <GroupCard group={group} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGroupsPage;
