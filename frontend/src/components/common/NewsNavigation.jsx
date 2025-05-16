import { Link, useLocation } from "react-router-dom";

const NewsNavigation = () => {
  const location = useLocation();
  return (
    <div className="flex justify-start gap-2 pl-10 pt-24">
      <Link to="/app/news/article">
        <button
          className={`btn bg-transparent opacity-50 border-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl transition-transform duration-150 active:scale-75 ${location.pathname === "/app/news/article" ? "bg-blue-500 text-white scale-105 shadow-lg opacity-100" : ""}`}
        >
          Article
        </button>
      </Link>
      <Link to="/app/news/update">
        <button
          className={`btn border-2 bg-transparent opacity-50 backdrop-blur-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl transition-transform duration-150 active:scale-75 ${location.pathname === "/app/news/update" ? "bg-blue-500 text-white scale-105 shadow-lg opacity-100" : ""}`}
        >
          Update
        </button>
      </Link>
    </div>
  );
};

export default NewsNavigation;
