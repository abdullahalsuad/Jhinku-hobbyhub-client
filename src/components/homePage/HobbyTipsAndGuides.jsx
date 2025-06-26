import React, { useEffect, useState } from "react";
import { Lightbulb, BookOpenText } from "lucide-react"; // Using Lucide React for modern icons
import { Link } from "react-router";

const HobbyTipsAndGuides = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tipsData.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((error) => console.error("Failed to load tips data:", error));
  }, []);

  return (
    <section className="py-30 ">
      {" "}
      {/* Removed dark:bg-gray-900 */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 flex items-center justify-center my-30">
          {" "}
          {/* Removed dark:text-white */}
          <Lightbulb className="text-5xl mr-4 text-purple-600" />{" "}
          {/* Removed dark:text-purple-400 */}
          Insightful Hobby Tips & Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl
                         transition-all duration-300 transform hover:-translate-y-1
                         border border-gray-100 flex flex-col"
            >
              <div className="flex-grow">
                <div className="text-3xl text-indigo-500 mb-3">
                  <BookOpenText />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  {tip.title}
                </h4>
                <p className="text-gray-600 text-base mb-4">{tip.desc}</p>
              </div>

              <Link to={`/blogs/${tip.id}`}>
                <button className="group relative inline-flex h-12 items-center justify-center rounded-md px-6 font-medium bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] hover:from-[#1f5490] hover:via-[#003479] hover:to-[#00224D] text-white cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform ease-in-out ">
                  <span>Read More</span>
                  <div className="relative ml-1 h-5 w-5 overflow-hidden">
                    <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 -translate-x-4"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbyTipsAndGuides;
