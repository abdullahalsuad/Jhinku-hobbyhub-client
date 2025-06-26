import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router";

// Dummy testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Photography Enthusiast",
    content:
      "HobbyHub helped me find a local photography group where I've made lifelong friends and improved my skills.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Chen",
    role: "Board Game Lover",
    content:
      "I started a weekly board game meetup through HobbyHub and now we meet every weekend. It's been amazing!",
    rating: 5,
    avatar:
      " https://images.pexels.com/photos/1170958/pexels-photo-1170958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Emily Rodriguez",
    role: "Book Club Organizer",
    content:
      "Connecting with fellow book lovers has never been easier. HobbyHub makes community-building effortless.",
    rating: 4,
    avatar:
      " https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "James Wilson",
    role: "Urban Hiker",
    content:
      "Found hiking buddies near me in just a few clicks. The app keeps getting better with every update.",
    rating: 5,
    avatar:
      " https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Priya S.",
    role: "Art Lover",
    content:
      "The painting group I joined has inspired me to take on new creative challenges every week.",
    rating: 5,
    avatar:
      " https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Main Testimonial Section
const ReviewTestimonial = () => {
  return (
    <section className="py-20 bg-white ">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900  mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto">
            Join thousands of hobbyists who connect daily through HobbyHub.
          </p>
        </div>
        {/* Top Marquee - Left to Right */}
        <div className="overflow-hidden mb-8">
          <Marquee speed={50} gradient={false} direction="left" play={true}>
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Bottom Marquee - Right to Left */}
        <div className="overflow-hidden">
          <Marquee speed={50} gradient={false} direction="right" play={true}>
            {testimonials.map((testimonial, index) => (
              <ReviewCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link to={"/signup"}>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-900 to-[#002553] text-white font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300 cursor-pointer  transform hover:-translate-y-1 ">
            Get Started Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ReviewTestimonial;
