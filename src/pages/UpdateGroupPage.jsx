import { use } from "react";
import UpdateGroupForm from "../components/updateGroupPage/UpdateGroupForm";
import { AuthContext } from "../context/AuthProvider";
import { FetchDataContext } from "../context/FetchDataProvider";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateGroupPage = () => {
  const { myHobbyGroups, setMyHobbyGroups } = use(FetchDataContext);
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { id } = useParams();

  const targetedHobbyGroup = myHobbyGroups.find((group) => group._id === id);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedHobbyGroups = Object.fromEntries(formData.entries());
    console.log(updatedHobbyGroups);

    try {
      const response = await fetch(
        `https://jhinku-hobbyhub-server.vercel.app/api/groups/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedHobbyGroups),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const modifiedHobbyGroups = await response.json();
      if (modifiedHobbyGroups.modifiedCount) {
        console.log("Hobby groups:", modifiedHobbyGroups);
        toast.success("Hobby groups successfully!");

        setMyHobbyGroups((prev) => [...prev, modifiedHobbyGroups]);
        navigate("/my-groups");
      }
    } catch (error) {
      console.log("error from sending data to the server", error);
    }
  };

  return (
    <>
      <UpdateGroupForm
        user={user}
        targetedHobbyGroup={targetedHobbyGroup}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default UpdateGroupPage;
