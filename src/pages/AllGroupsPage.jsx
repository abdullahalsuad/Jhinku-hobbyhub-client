import { use, useEffect } from "react";
import GroupCard from "../components/allGroupsPage/GroupCard";
import { FetchDataContext } from "../context/FetchDataProvider";
import LoadingSpinner from "../components/Loader/LoadingSpinner";

const AllGroupsPage = () => {
  const { hobbyGroups, loading } = use(FetchDataContext);
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="min-h-screen  py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  text-center mb-10">
            Explore All Groups
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {hobbyGroups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGroupsPage;
