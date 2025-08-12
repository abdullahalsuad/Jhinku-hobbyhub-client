import { Users, TrendingUp, Activity, BookOpenText } from "lucide-react";
import { use } from "react";
import { FetchDataContext } from "../../context/FetchDataProvider";

const Dashboard = () => {
  const { hobbyGroups, myHobbyGroups } = use(FetchDataContext);

  return (
    <>
      {/* --- KPI Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10  px-10">
        {/* Example Metric Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">My Group</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-extrabold text-gray-900 mb-2">
            {myHobbyGroups.length}
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-semibold">+2.5%</span> since
            last month
          </p>
        </div>
        {/* Example Metric Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">New Events</span>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-extrabold text-gray-900 mb-2">
            {myHobbyGroups.length}
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-red-500 font-semibold">-1.2%</span> from last
            week
          </p>
        </div>
        {/* Placeholder for more KPI cards */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">Active Groups</span>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-3xl font-extrabold text-gray-900 mb-2">
            {hobbyGroups.length}
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-semibold">+5 groups</span> this
            month
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-sm">Articles Published</span>
            <BookOpenText className="w-5 h-5 text-orange-500" />{" "}
            {/* Assuming BookOpenText from lucide-react */}
          </div>
          <p className="text-3xl font-extrabold text-gray-900 mb-2">2,100</p>
          <p className="text-sm text-gray-500">
            <span className="text-green-500 font-semibold">+15 new</span> this
            week
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
