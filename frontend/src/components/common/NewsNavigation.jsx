import { Link, useLocation } from "react-router-dom";

const NewsNavigation = () => {
  const location = useLocation();
  return (
    <div className="flex justify-start gap-2 pl-10 pt-24">
      <Link to="/app/news/article">
        <button
          className={`btn bg-white/10 opacity-30 text-white border-2 btn-lg  xl:btn-xl transition-transform duration-150 active:scale-75 ${location.pathname === "/app/news/article" ? "bg-blue-500 text-white scale-105 shadow-lg opacity-200" : ""}`}
        >
          Article
        </button>
      </Link>
      <Link to="/app/news/update">
        <button
          className={`btn border-2 bg-white/10 opacity-30 text-white  btn-lg xl:btn-xl transition-transform duration-150 active:scale-75 ${location.pathname === "/app/news/update" ? "bg-blue-500 text-white scale-105 shadow-lg opacity-200" : ""}`}
        >
          Update
        </button>
      </Link>
    </div>
  );
};

export default NewsNavigation;
