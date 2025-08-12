import { use } from "react";
import MyGroupsTable from "../components/myGroupspage/MyGroupsTable";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FetchDataContext } from "../context/FetchDataProvider";
import { useNavigate } from "react-router";

const MyGroupsPage = () => {
  const { myHobbyGroups, setMyHobbyGroups, setHobbyGroups, loading } =
    use(FetchDataContext);

  const navigate = useNavigate();
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

  return (
    <>
      <div className="max-w-7xl mx-auto mt-5 mb-10">
        <h1 className="text-3xl font-bold  text-center mb-10">My Groups</h1>

        {/* Table or Empty State */}
        {myHobbyGroups.length === 0 ? (
          <div className="flex justify-center items-center min-h-[40vh] px-4">
            <div className="text-center max-w-md p-8   ">
              <div className="text-5xl mb-4">👥</div>
              <h2 className="text-2xl font-semibold text-gray-800  mb-2">
                No Groups Yet!
              </h2>
              <p className="text-gray-600  mb-6">
                Create your first group to start collaborating with others.
              </p>
              <button
                onClick={() => navigate("/create-group")}
                className="px-6 py-2 bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white font-medium rounded-lg shadow-md  duration-300 transform hover:-translate-y-0.5 cursor-pointer transition-transform hover:scale-105 "
              >
                Create Group
              </button>
            </div>
          </div>
        ) : (
          <MyGroupsTable
            myGroups={myHobbyGroups}
            handleDelete={handleDelete}
            loading={loading}
          />
        )}
      </div>
    </>
  );
};

export default MyGroupsPage;
