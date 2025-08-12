import React, { useState, use } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { MdOutlineEmail } from "react-icons/md";

const ProfilePage = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [editedDisplayName, setEditedDisplayName] = useState(
    user?.displayName || ""
  );
  const [editedPhotoURL, setEditedPhotoURL] = useState(user?.photoURL || "");

  React.useEffect(() => {
    if (user) {
      setEditedDisplayName(user.displayName || "");
      setEditedPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      editedDisplayName === user.displayName &&
      editedPhotoURL === user.photoURL
    ) {
      toast.info("No changes detected. Nothing to update.");
      setIsLoading(false);
      setIsEditing(false);
      return;
    }

    try {
      await updateUser({
        displayName: editedDisplayName,
        photoURL: editedPhotoURL,
      });

      setUser({
        ...user,
        displayName: editedDisplayName,
        photoURL: editedPhotoURL,
      });
      toast.success("Profile updated successfully!");

      setIsEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedDisplayName(user?.displayName || "");
    setEditedPhotoURL(user?.photoURL || "");
  };

  return (
    <div className=" bg-gray-50 mt-30 px-4 sm:px-6 lg:px-8 flex items-start justify-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel: Profile Overview */}
        <div className="relative md:w-1/3 bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <circle
                cx="20"
                cy="80"
                r="30"
                fill="currentColor"
                className="text-blue-400 opacity-60"
              ></circle>
              <circle
                cx="80"
                cy="20"
                r="40"
                fill="currentColor"
                className="text-blue-400 opacity-60"
              ></circle>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
              <img
                src={
                  user?.photoURL ||
                  "https://via.placeholder.com/150/A78BFA/FFFFFF?text=JD"
                }
                alt="User Avatar"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-extrabold mb-2 text-shadow-md">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-lg opacity-90 font-light flex items-center gap-2">
              <MdOutlineEmail className="text-xl" />
              {user?.email || "N/A"}
            </p>
          </div>
        </div>

        {/* Right Panel: Edit Form / Details */}
        <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {isEditing ? "Edit Profile" : "Profile Details"}
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center justify-center p-3 rounded-full bg-gray-100 text-blue-700 shadow-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 cursor-pointer"
              aria-label={isEditing ? "Close edit form" : "Edit profile"}
            >
              {isEditing ? <IoMdClose size={24} /> : <FaEdit size={20} />}
            </button>
          </div>

          {!isEditing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Full Name
                </label>
                <p className="text-gray-900 text-lg p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {user?.displayName || "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Photo URL
                </label>
                <p className="text-gray-900 text-lg p-3 bg-gray-50 rounded-lg border border-gray-200 truncate">
                  {user?.photoURL || "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Email (Read-Only)
                </label>
                <p className="text-gray-500 text-lg p-3 bg-gray-100 rounded-lg border border-gray-200 cursor-not-allowed">
                  {user?.email || "N/A"}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2 text-sm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editedDisplayName}
                  onChange={(e) => setEditedDisplayName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="photoURL"
                  className="block text-gray-700 font-semibold mb-2 text-sm"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  name="photoURL"
                  value={editedPhotoURL}
                  onChange={(e) => setEditedPhotoURL(e.target.value)}
                  placeholder="https://example.com/your-photo.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex items-center justify-center px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  disabled={isLoading}
                >
                  <IoMdClose size={20} className="mr-2" /> Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <FaEdit size={20} className="mr-2" /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
