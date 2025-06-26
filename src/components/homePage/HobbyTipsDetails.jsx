import { CalendarDays, Tag, Timer, BookOpenText } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const HobbyTipsDetails = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/tipsData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === id);
        setArticle(found);
      })
      .catch((error) => console.error("Error loading article:", error));
  }, [id]);

  if (!article) {
    return (
      <div className="py-16 text-center text-gray-700 bg-gray-50">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {" "}
        {/* Constrain width for readability */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        {/* Article Metadata */}
        <div className="flex flex-wrap items-center text-gray-600 text-sm mb-8 space-x-4">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            <span className="font-medium text-indigo-600">
              {article.category}
            </span>
          </div>
          <div className="flex items-center">
            <Timer className="w-4 h-4 mr-2" />
            <span>{article.readTime}</span>
          </div>
        </div>
        {/* Article Content - Full Description */}
        <div className="prose lg:prose-lg xl:prose-xl max-w-none text-gray-800 leading-relaxed mb-10">
          {/* Using dangerouslySetInnerHTML to render HTML-like content from fullDescription */}
          {/* In a real app, consider a Markdown renderer for safety and flexibility */}
          <div
            dangerouslySetInnerHTML={{
              __html: article.fullDescription.replace(/\n/g, "<br/>"),
            }}
          />
        </div>
        {/* Optional: Back to Articles Button */}
        <div className="text-center">
          <Link
            to={"/"} // Link back to your AllArticles component/page
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            <BookOpenText className="w-5 h-5 mr-3" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HobbyTipsDetails;
