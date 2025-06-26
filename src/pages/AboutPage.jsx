import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import ReviewTestimonial from "../components/About/ReviewTestimonial";
import { Link } from "react-router";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // animate only once
      offset: 100, // trigger before element hits viewport
    });
  }, []);
  return (
    <section className="bg-white py-20 px-4">
      {/* Hero Section */}
      <div data-aos="fade-up" className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          About HobbyHub
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting people through shared hobbies and passions — because life
          is better when you do what you love with others who love it too.
        </p>
      </div>

      {/* Mission & Vision */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
      >
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition-shadow  duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To empower communities by helping people discover, join, and create
            local hobby groups that ignite passion, creativity, and connection.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A world where everyone can find their tribe — no matter the hobby.
            We aim to make HobbyHub the go-to platform for meaningful social
            engagement around shared interests.
          </p>
        </div>
      </div>

      {/* Features / Values */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-7xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What Makes Us Unique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center hover:shadow-lg transition transform hover:-translate-y-1 duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-indigo-100 text-indigo-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.826c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V4L8 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community First
            </h3>
            <p className="text-gray-600">
              We believe in building real-life connections over digital
              interactions.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center hover:shadow-lg transition transform hover:-translate-y-1 duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-pink-100 text-pink-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Group Creation
            </h3>
            <p className="text-gray-600">
              Create or join groups in seconds — no barriers, just
              passion-driven communities.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center hover:shadow-lg transition transform hover:-translate-y-1 duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Local & Global Reach
            </h3>
            <p className="text-gray-600">
              Find nearby groups or explore global communities of people with
              similar interests.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-center py-16 px-4 bg-gradient-to-r from-blue-900 to-[#002553] rounded-2xl text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Join the Fun?
        </h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Whether you're looking to meet new people or grow your hobby, HobbyHub
          is the perfect place to start.
        </p>
        <Link to={"/signup"}>
          <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Get Started Now
          </button>
        </Link>
      </div>
      {/* Testimonials */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className=" py-16  mb-20 rounded-2xl"
      >
        <ReviewTestimonial />
      </div>
    </section>
  );
};

export default AboutPage;
