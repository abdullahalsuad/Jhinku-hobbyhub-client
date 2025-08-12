import React, { useEffect, useState } from "react";
import GroupDetailsCard from "../components/allGroupsPage/GroupDetailsCard";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import GroupDetailsCardLoading from "../components/allGroupsPage/GroupDetailsCardLoading";

const GroupDetailsPage = () => {
  const { id } = useParams();
  const [singleHobbyGroup, setSingleHobbyGroup] = useState();
  const [loading, setLoading] = useState(true);
  const [isPastDate, setIsPastDate] = useState(false);

  const navigate = useNavigate();
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Fetch single hobby groups items
  useEffect(() => {
    const fetchSingleHobbyGroupData = async () => {
      try {
        const response = await fetch(
          `https://jhinku-hobbyhub-server.vercel.app/api/groups/${id}`
        );
        const data = await response.json();

        setSingleHobbyGroup(data);
        setLoading(false);

        // Check if the group's date is in the past
        const inputDate = new Date(data.startDate);
        const today = new Date();
        const todayDateOnly = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        );

        if (inputDate < todayDateOnly) {
          toast.warn("The group is no longer active 😕");
          setIsPastDate(true);
        }
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchSingleHobbyGroupData();
  }, [id]);

  // handling join group
  const handlingJoinGroup = () => {
    toast.success("You've joined the group successfully! 🎉");
    navigate("/groups");
  };

  return (
    <div className="mt-20">
      {/* UI */}
      {loading ? (
        <GroupDetailsCardLoading />
      ) : (
        <GroupDetailsCard
          singleHobbyGroup={singleHobbyGroup}
          handlingJoinGroup={handlingJoinGroup}
          isPastDate={isPastDate}
        />
      )}
    </div>
  );
};

export default GroupDetailsPage;
