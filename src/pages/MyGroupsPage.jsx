import { use, useEffect, useState } from "react";
import MyGroupsTable from "../components/myGroupspage/MyGroupspage";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FetchDataContext } from "../context/FetchDataProvider";

const MyGroupsPage = () => {
  const [myHobbyGroups, setMyHobbyGroups] = useState([]);
  const { user } = use(AuthContext);
  const { setHobbyGroups } = use(FetchDataContext);

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

  // handle delete
  const handleDelete = async (id) => {
    // alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/groups/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // Remove from my groups page
          setMyHobbyGroups((prev) => prev.filter((group) => group._id !== id));

          // Remove from all groups page
          setHobbyGroups((prev) => prev.filter((group) => group._id !== id));
          if (response.ok) {
            toast.success("Hobby groups deleted successfully");
          }
        } catch (error) {
          console.log("Error from deleting hobby groups", error);
        }
      }
    });
  };

  console.log(myHobbyGroups);

  return (
    <>
      <div className="min-h-screen  py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  text-center mb-10">My Groups</h1>

          {/* Table */}
          <MyGroupsTable myGroups={myHobbyGroups} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default MyGroupsPage;
