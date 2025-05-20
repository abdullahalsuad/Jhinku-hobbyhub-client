import React, { useEffect, useState } from "react";
import GroupCard from "../components/allGroupsPage/GroupCard";
import GroupDetailsCard from "../components/allGroupsPage/GroupDetailsCard";
import { useParams } from "react-router";
import LoadingSpinner from "../components/Loader/LoadingSpinner";

const GroupDetailsPage = () => {
  const { id } = useParams();
  const [singleHobbyGroup, setSingleHobbyGroup] = useState();

  // Fetch single hobby groups items
  useEffect(() => {
    const fetchSingleHobbyGroupData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/groups/${id}`);
        const data = await response.json();
        setSingleHobbyGroup(data);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchSingleHobbyGroupData();
  }, [id]);

  // if (!singleHobbyGroup) return <LoadingSpinner />;

  return (
    <>
      {/* UI */}
      <GroupDetailsCard singleHobbyGroup={singleHobbyGroup} />
    </>
  );
};

export default GroupDetailsPage;
