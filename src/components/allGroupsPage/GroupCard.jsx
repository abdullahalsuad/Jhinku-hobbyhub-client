import { MdArrowOutward, MdOutlinePushPin } from "react-icons/md";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  return (
    <>
      <div>
        <div
          key={group.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            src={group.image}
            alt={group.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-[#00224D]">
              {group.name}
            </h2>
            <p className="text-sm text-[#1f5490] mt-1">{group.category}</p>
            <div className="mt-3 flex justify-between items-center text-sm text-purple-600">
              <span>{group.members} Members</span>
              <span className="flex items-center gap-2">
                <MdOutlinePushPin size={20} /> {group.location}
              </span>
            </div>
            <Link
              to={`/groups/${group.id}`}
              className="mt-4  text-[#1f5490] font-medium hover:text-[#00224D] transition flex items-center gap-4"
            >
              See More <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupCard;
