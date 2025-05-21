import React, { useEffect, useState } from "react";
import GroupDetailsCard from "../components/allGroupsPage/GroupDetailsCard";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const GroupDetailsPage = () => {
  const { id } = useParams();
  const [singleHobbyGroup, setSingleHobbyGroup] = useState();
  const navigate = useNavigate();

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

  // handling join group
  const handlingJoinGroup = (createdDate) => {
    // Convert input string (YYYY-MM-DD) into a Date object
    const [year, month, day] = createdDate.split("-");
    const inputDate = new Date(year, month - 1, day);

    // Get today's date (without time)
    const today = new Date();
    const todayDateOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    // Compare dates
    if (inputDate < todayDateOnly) {
      toast.warn("The group is no longer active 😕");
      return;
    } else {
      toast.success("You've joined the group successfully! 🎉");
      navigate("/groups");
      return;
    }
  };

  // if (!singleHobbyGroup) return <LoadingSpinner />;

  return (
    <>
      {/* UI */}
      <GroupDetailsCard
        singleHobbyGroup={singleHobbyGroup}
        handlingJoinGroup={handlingJoinGroup}
      />
    </>
  );
};

export default GroupDetailsPage;
