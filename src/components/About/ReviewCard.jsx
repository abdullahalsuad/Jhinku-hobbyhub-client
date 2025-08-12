const ReviewCard = ({ testimonial, index }) => {
  return (
    <div
      key={index}
      className="min-w-[300px] max-w-sm bg-gray-50  rounded-2xl p-8 m-4 hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
      {/* <FaQuoteLeft className="h-8 w-8 text-emerald-500 mb-4" /> */}
      <p className="text-gray-600  mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 ">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 ">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
