import { use } from "react";
import CreateGroupForm from "../components/createGroup/CreateGroupForm";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const { user } = use(AuthContext);

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

    console.log(newHobbyGroupData);

    // Make an API request to send data to the backend
    try {
      const response = await fetch("http://localhost:3000/api/hobby-groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHobbyGroupData),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const createHobbyGroup = await response.json();
      if (createHobbyGroup.insertedId) {
        // console.log("hobby group added:", createHobbyGroup);
        toast.success("hobby group added successfully!");

        //ui update
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
