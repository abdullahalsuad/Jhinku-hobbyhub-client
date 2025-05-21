import { use, useEffect, useState } from "react";
import MyGroupsTable from "../components/myGroupspage/MyGroupspage";
import { AuthContext } from "../context/AuthProvider";

const MyGroupsPage = () => {
  const [myHobbyGroups, setMyHobbyGroups] = useState([]);
  const { user } = use(AuthContext);

  // Fetch single hobby groups items
  useEffect(() => {
    const fetchSingleHobbyGroupData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/groups/user/${user?.email}`
        );
        const data = await response.json();
        setMyHobbyGroups(data);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchSingleHobbyGroupData();
  }, [user?.email]);

  return (
    <>
      <div className="min-h-screen  py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  text-center mb-10">My Groups</h1>

          {/* Table */}
          <MyGroupsTable myGroups={myHobbyGroups} />
        </div>
      </div>
    </>
  );
};

export default MyGroupsPage;
