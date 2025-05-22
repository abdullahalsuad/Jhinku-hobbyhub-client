/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

// Creating a context
export const FetchDataContext = createContext(null);

const FetchDataProvider = ({ children }) => {
  // state
  const [hobbyGroups, setHobbyGroups] = useState([]);
  const [myHobbyGroups, setMyHobbyGroups] = useState([]);
  const [ongoingHobbyGroups, setOngoingHobbyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = use(AuthContext);

  // Fetch all hobby groups items
  useEffect(() => {
    const fetchHobbyGroupsData = async () => {
      try {
        const response = await fetch(
          "https://jhinku-hobbyhub-server.vercel.app/api/groups"
        );
        const data = await response.json();
        setHobbyGroups(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchHobbyGroupsData();
  }, []);

  // Fetch single hobby groups items
  useEffect(() => {
    const fetchSingleHobbyGroupData = async () => {
      try {
        const response = await fetch(
          `https://jhinku-hobbyhub-server.vercel.app/api/groups/user/${user?.email}`
        );
        const data = await response.json();
        setMyHobbyGroups(data);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchSingleHobbyGroupData();
  }, [user?.email]);

  // Fetch all ongoing hobby groups items
  useEffect(() => {
    const fetchAllOngoingHobbyGroupsData = async () => {
      try {
        const response = await fetch(
          "https://jhinku-hobbyhub-server.vercel.app/api/ongoing"
        );
        const data = await response.json();
        setOngoingHobbyGroups(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchAllOngoingHobbyGroupsData();
  }, []);

  // value
  const value = {
    hobbyGroups,
    setHobbyGroups,
    ongoingHobbyGroups,
    myHobbyGroups,
    setMyHobbyGroups,
    loading,
  };

  return <FetchDataContext value={value}>{children}</FetchDataContext>;
};

export default FetchDataProvider;
