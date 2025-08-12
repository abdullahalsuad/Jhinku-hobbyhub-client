import React from "react";
import { CalendarDays, MapPin, AlarmClock } from "lucide-react"; // Using Lucide React for modern icons
import { Link } from "react-router";

const events = [
  {
    id: "682dd5d29626df37ded5c0a0",
    title: "Gardening",
    date: "30",
    month: "MAY",
    location: "NYC",
    time: "10:00 AM - 1:00 PM",
  },
  {
    id: "682ed2597aa5551c3a4300a6",
    title: "Code Masters",
    date: "24",
    month: "MAY",
    location: "San Francisco",
    time: "6:30 PM - 9:00 PM",
  },
  {
    id: "682ed4379763249f7e4cb124",
    title: "Virtual Warriors",
    date: "30",
    month: "MAY",
    location: "Austin",
    time: "7:00 AM - 8:30 AM",
  },
  {
    id: "682ed2f37aa5551c3a4300a8",
    title: "Lens Lovers",
    date: "28",
    month: "MAY",
    location: "Los Angeles",
    time: "6:30 PM - 9:00 PM",
  },
];

const UpcomingEvents = () => {
  return (
    <section className=" bg-gray-900 py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white flex items-center justify-center my-30">
          <CalendarDays className="text-5xl mr-4 text-indigo-600 dark:text-indigo-400" />
          Don't Miss These Events!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <Link to={`/groups/${event.id}`}>
              <div
                key={idx}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                         flex items-start space-x-6 border border-gray-700"
              >
                {/* Date Block */}
                <div className="flex-shrink-0 text-center bg-indigo-900 rounded-xl p-3 w-20">
                  <p className="text-indigo-300 text-xl font-extrabold leading-none">
                    {event.date}
                  </p>
                  <p className="text-indigo-400 text-sm font-semibold uppercase">
                    {event.month}
                  </p>
                </div>

                {/* Event Details */}
                <div className="flex-grow">
                  <h4 className="font-bold text-xl text-gray-100 mb-1">
                    {event.title}
                  </h4>
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <AlarmClock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Optional: A "View Details" button could go here */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
