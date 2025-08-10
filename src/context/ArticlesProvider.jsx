/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "./AuthProvider";

// Creating a context
export const ArticleContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allArticles, setAllArticles] = useState([]);
  // const [myArticles, setMyArticles] = useState([]);

  const axiosSecure = useAxiosSecure();

  // Get all articles
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axiosSecure.get("/articles");
        const articlesData = response.data;
        setAllArticles(articlesData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Failed to fetch all articles ", err);
      }
    };
    fetchAllJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    loading,
    allArticles,
    setAllArticles,
  };
  return <ArticleContext value={value}>{children}</ArticleContext>;
};

export default ArticlesProvider;
