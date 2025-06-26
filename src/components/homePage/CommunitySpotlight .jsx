import React from "react";
import { Star, UserCircle2, Users } from "lucide-react"; // Using Lucide React for modern icons

const spotlights = [
  {
    name: "Sarah Johnson",
    group: "Nature Lovers Club",
    bio: "A true outdoor enthusiast, Sarah has organized over 10 exhilarating hikes and wilderness explorations this year, connecting hundreds of nature lovers.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example avatar URL
  },
  {
    name: "James Lee",
    group: "Game Dev Collective",
    bio: "An invaluable mentor, James has guided 10 new developers through their first game projects, fostering a supportive and innovative learning environment.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example avatar URL
  },
  {
    name: "Maria Rodriguez",
    group: "Digital Art Enthusiasts",
    bio: "Maria's captivating tutorials and weekly art challenges have inspired over 50 members to explore digital painting and illustration.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example avatar URL
  },
  {
    name: "David Chen",
    group: "Local Foodies Club",
    bio: "David's curated food tours and recipe exchanges have brought together local culinary talents, enriching our community's dining experiences.",
    avatar:
      "https://images.pexels.com/photos/32699476/pexels-photo-32699476.jpeg", // Example avatar URL
  },
];

const CommunitySpotlight = () => {
  return (
    <section className="py-16 my-30">
      {" "}
      {/* Softer background for light theme */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 flex items-center justify-center">
          <Star className="text-5xl mr-4 text-yellow-500" />{" "}
          {/* Vibrant star icon */}
          Community Spotlight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spotlights.map((person, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1 
                         border border-gray-100 flex items-center space-x-6"
            >
              {/* Avatar Section */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md">
                {person.avatar ? (
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserCircle2 className="w-full h-full text-gray-400" /> // Fallback icon
                )}
              </div>

              {/* Bio and Info Section */}
              <div className="flex-grow">
                <h4 className="font-bold text-xl text-gray-900 mb-1">
                  {person.name}
                </h4>
                <p className="text-indigo-600 font-semibold text-md mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {person.group}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
