import { use } from "react";
import MyGroupsTable from "../components/myGroupspage/MyGroupsTable";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FetchDataContext } from "../context/FetchDataProvider";

const MyGroupsPage = () => {
  const { myHobbyGroups, setMyHobbyGroups } = use(FetchDataContext);
  const { setHobbyGroups } = use(FetchDataContext);

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
            `https://jhinku-hobbyhub-server.vercel.app/api/groups/${id}`,
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

  // console.log(myHobbyGroups);

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
