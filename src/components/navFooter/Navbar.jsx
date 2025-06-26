import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { FaPeopleGroup } from "react-icons/fa6";

import { WiDaySunny } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";

const Navbar = () => {
  const { user, signOutUser, setUser } = use(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  let handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/");
      toast.success("Logout successful.");
    } catch (error) {
      console.log(error);
    }
    setUser(null);
  };

  return (
    <nav className="bg-[#00224D] shadow-md text-white fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section - Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer"
            >
              <FaPeopleGroup size={30} className="text-[#C68EFD]" />
              <span className="ml-2 text-xl font-bold text-[#C68EFD]">
                The Hub
              </span>
            </button>
          </div>

          {/* Center section - Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-4 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              All Groups
            </NavLink>
            <NavLink
              to="/create-group"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              Create Group
            </NavLink>
            <NavLink
              to="/my-groups"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              My Groups
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Right section - Profile / Login */}
          <div className="flex items-center">
            {user ? (
              <div className="lg:flex items-center space-x-4 hidden">
                {/* Profile Image with Tooltip */}
                <div className="relative group inline-block">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="h-10 w-10 rounded-full object-cover cursor-pointer"
                    data-tooltip-target="tooltip-bottom"
                    data-tooltip-placement="bottom"
                  />

                  {/* Tooltip  */}
                  <div
                    id="tooltip-bottom"
                    role="tooltip"
                    className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity inline-block px-10 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700 whitespace-nowrap"
                  >
                    <span className="text-[18px]">{user?.displayName}</span>{" "}
                    <br />
                    <span>{user?.email}</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="text-red-400 hover:text-red-600 font-medium cursor-pointer flex items-center gap-2 text-xl"
                >
                  Logout <IoIosLogOut size={25} />
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                    : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium"
                }
              >
                Login
              </NavLink>
            )}

            {/* Mobile menu button */}
            <div className="flex md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none cursor-pointer"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#00224D]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                  : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                  : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              All Groups
            </NavLink>
            <NavLink
              to="/create-group"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                  : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Create Group
            </NavLink>
            <NavLink
              to="/my-groups"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                  : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              My Groups
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                  : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#C68EFD] border-b-2 border-[#C68EFD] px-3 py-2 text-sm font-medium"
                  : "text-gray-200 hover:text-[#C68EFD] px-3 py-2 text-sm font-medium transition"
              }
            >
              Contact Us
            </NavLink>

            {user ? (
              <div className="flex items-center space-x-4 mt-4 px-4">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="h-8 w-8 rounded-full border border-[#C68EFD]"
                />
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-[#1f5490] hover:text-red-500 w-full text-left cursor-pointer"
                >
                  Logout <IoIosLogOut size={25} />
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#C68EFD] border-l-4 border-[#C68EFD] pl-3 py-2 text-base font-medium"
                    : "block text-gray-200 hover:bg-[#1f5490] pl-3 py-2 text-base font-medium"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
