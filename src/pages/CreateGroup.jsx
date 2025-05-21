import { use } from "react";
import CreateGroupForm from "../components/createGroup/CreateGroupForm";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FetchDataContext } from "../context/FetchDataProvider";

const CreateGroup = () => {
  const { user } = use(AuthContext);
  const { setHobbyGroups, setMyHobbyGroups } = use(FetchDataContext);

  // Fetching username and email from Firebase
  const displayName = user?.displayName;
  const email = user?.email;

  // Submit form data to create a new hobby group
  const handleCreateHobbyGroup = async (e) => {
    e.preventDefault();

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const newHobbyGroupData = Object.fromEntries(formData.entries());

    // Make an API request to send data to the backend
    try {
      const response = await fetch(
        "https://jhinku-hobbyhub-server.vercel.app/api/groups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newHobbyGroupData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const createHobbyGroup = await response.json();
      if (createHobbyGroup.insertedId) {
        // console.log("hobby group added:", createHobbyGroup);
        toast.success("hobby group added successfully!");

        // UI update
        newHobbyGroupData._id = createHobbyGroup.insertedId;

        setHobbyGroups((prev) => [...prev, newHobbyGroupData]);
        setMyHobbyGroups((prev) => [...prev, newHobbyGroupData]);
        e.target.reset();
      }
    } catch (error) {
      console.log("error from sending data to the server", error);
    }
  };

  return (
    <>
      {/* UI */}
      <CreateGroupForm
        handleCreateHobbyGroup={handleCreateHobbyGroup}
        email={email}
        displayName={displayName}
      />
    </>
  );
};

export default CreateGroup;
