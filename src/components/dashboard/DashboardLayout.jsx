import { Link, Outlet, useNavigate } from "react-router";
import {
  Users,
  Bell,
  PlusCircle,
  LayoutGrid,
  House,
  LogOut,
  UserRoundPen,
} from "lucide-react";
import { FaPeopleGroup } from "react-icons/fa6";
import { AuthContext } from "../../context/AuthProvider";
import { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";
import FetchDataProvider from "../../context/FetchDataProvider";

const DashboardLayout = () => {
  const { user, signOutUser, setUser } = use(AuthContext);

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
    <div className="flex min-h-screen bg-gray-50 ">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        {/* Logo/Brand */}
        <Link to={"/"} className="my-5 border-b-2 border-gray-700 pb-5">
          <button className="flex items-center cursor-pointer focus:outline-none">
            <FaPeopleGroup size={30} className="text-[#C68EFD]" />

            <span className="ml-2 text-xl font-bold text-[#C68EFD]">
              The Hub
            </span>
          </button>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-4 flex-grow">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <LayoutGrid className="w-5 h-5 text-gray-300" />{" "}
            <span>Dashboard</span>
          </Link>
          <Link
            to="/groups"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Users className="w-5 h-5 text-gray-300" />
            <span>Community</span>
          </Link>

          <Link
            to="my-groups"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaPeopleGroup className="w-5 h-5 text-gray-300" />

            <span>My Groups</span>
          </Link>

          <Link
            to="create-group"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <PlusCircle className="w-5 h-5 text-gray-300" />
            <span>Create Group</span>
          </Link>

          <Link
            to="profile"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <UserRoundPen className="w-5 h-5 text-gray-300" />
            <span>Profile</span>
          </Link>
        </nav>

        <div className="mt-auto p-4 border-t border-gray-700 pt-5">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full object-cover"
                />
              ) : user.displayName ? (
                user.displayName.charAt(0).toUpperCase()
              ) : (
                "U"
              )}
            </div>
            <span className="text-gray-200 text-base font-medium overflow-hidden whitespace-nowrap ">
              {user.displayName}
            </span>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleSignOut}
            className="w-full text-red-400 hover:text-red-300 font-medium px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 cursor-pointer space-x-3"
          >
            <LogOut size={20} /> Logout
          </button>
          {/* Hack to Home */}
          <Link
            to={"/"}
            className="w-full text-blue-400 hover:text-blue-300 font-medium px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4 space-x-3"
          >
            <House size={20} />
            Go Home
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto flex flex-col pb-10">
        {/* header */}
        <header className="sticky top-0 z-40 bg-white flex justify-between items-center mb-8 pb-4 border-b border-gray-200 p-6 rounded-md ">
          {" "}
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back, {user.displayName}!
          </h1>
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
            {/* User Avatar in Header */}
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : user.displayName ? (
                user.displayName.charAt(0).toUpperCase()
              ) : (
                "U"
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <FetchDataProvider>
          <Outlet />
        </FetchDataProvider>
      </div>

      {/* toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default DashboardLayout;
