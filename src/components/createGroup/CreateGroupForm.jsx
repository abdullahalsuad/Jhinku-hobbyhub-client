import React from "react";

const CreateGroupForm = ({ handleCreateHobbyGroup, displayName, email }) => {
  return (
    <>
      <div className="  py-12 px-4 flex items-center justify-center ">
        <div className="bg-white  rounded-lg p-8 w-full max-w-3xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create a New Hobby Group
          </h2>

          <form className="space-y-6" onSubmit={handleCreateHobbyGroup}>
            {/* Group Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Group Name
              </label>
              <input
                type="text"
                name="groupName"
                required
                placeholder="e.g. Sunset Sketchers"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Hobby Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Hobby Category
              </label>
              <select
                required
                name="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="">Select a category</option>
                <option value="drawing">Drawing & Painting</option>
                <option value="photography">Photography</option>
                <option value="gaming">Video Gaming</option>
                <option value="fishing">Fishing</option>
                <option value="running">Running</option>
                <option value="cooking">Cooking</option>
                <option value="reading">Reading</option>
                <option value="writing">Writing</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                required
                rows="4"
                name="description"
                placeholder="Describe what your group is about..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              ></textarea>
            </div>

            {/* Meeting Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Meeting Location
              </label>
              <input
                required
                type="text"
                name="meetingLocation"
                placeholder="e.g. Central Park, NYC or Zoom link"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Max Members */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Max Members
              </label>
              <input
                required
                type="number"
                min="2"
                max="100"
                name="membersNumber"
                placeholder="e.g. 15"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Start Date / Deadline
              </label>
              <input
                required
                type="date"
                name="startDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Image URL
              </label>
              <input
                required
                type="url"
                name="groupImg"
                placeholder="https://example.com/image.jpg "
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* User Info - Readonly */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  User Name
                </label>
                <input
                  required
                  defaultValue={displayName}
                  type="text"
                  name="userName"
                  readOnly
                  className="w-full px-4 py-3  bg-gray-300  border border-gray-300 rounded-lg  cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  defaultValue={email}
                  type="email"
                  name="userEmail"
                  readOnly
                  className="w-full px-4 py-3   border border-gray-300 rounded-lg bg-gray-300 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Create Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className=" bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white py-3 px-8 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                Create Group Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGroupForm;
