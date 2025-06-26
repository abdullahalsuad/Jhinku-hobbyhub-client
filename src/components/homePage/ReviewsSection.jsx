import React from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment:
        "I found my book club through HobbyHub and made amazing friends!",
    },
    {
      name: "Alex K.",
      rating: 4,
      comment:
        "Great way to connect with local hobbyists. The hiking group is awesome!",
    },
    {
      name: "Priya R.",
      rating: 5,
      comment:
        "From painting to photography — this platform changed how I spend weekends.",
    },
  ];

  return (
    <section className="  text-white">
      <div className="w-10/12 mx-auto px-6 md:px-12  py-32 rounded-md ">
        <h2 className="text-3xl font-bold text-center mb-12 text-black ">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#00224D] via-[#003479] to-[#1f5490] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 italic">"{review.comment}"</p>
              <p className="font-semibold text-[#C68EFD]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
