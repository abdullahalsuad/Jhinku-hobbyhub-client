/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// Creating a context
export const FetchDataContext = createContext(null);

const FetchDataProvider = ({ children }) => {
  const [hobbyGroups, setHobbyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all hobby groups items
  useEffect(() => {
    const fetchHobbyGroupsData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/hobby-groups");
        const data = await response.json();
        setHobbyGroups(data);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all hobby groups data", error);
      }
    };

    fetchHobbyGroupsData();
  }, []);

  // value
  const value = { hobbyGroups, setHobbyGroups, loading };

  return <FetchDataContext value={value}>{children}</FetchDataContext>;
};

export default FetchDataProvider;
