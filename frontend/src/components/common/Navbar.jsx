import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/home_icon.png";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-transparent backdrop-blur-md fixed top-0 z-10 w-full lg:px-20">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-3xl font-semibold text-center lg:text-start">
            GameHub
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal font-semibold px-1">
              <li>
                <Link to="/app/home">HOME</Link>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">MATCHES</span>
                <ul className="absolute left-0 top-full z-20 hidden min-w-[150px] bg-neutral-950 rounded-md group-hover:block">
                  <li className="hover:text-red-500">
                    <Link to="/app/matches">Schedule</Link>
                  </li>
                  <li className="hover:text-red-500">
                    <Link to="/app/matches/result">Result</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/app/news/article">NEWS</Link>
              </li>
              <li>
                <Link to="/app/agents">AGENTS</Link>
              </li>

              <li>
                <Link to="/app/highlights">HIGHLIGHTS</Link>
              </li>
              <li>
                <Link to="/app/players">PLAYERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-neutral-950 min-h-full w-80 p-4 pt-20">
          <li>
            <Link to="/app/home">HOME</Link>
          </li>
          <li>
            <Link to="/app/matches">MATCHES</Link>
          </li>
          <li>
            <Link to="/app/news">NEWS</Link>
          </li>
          <li>
            <Link to="/app/guide">GUIDES</Link>
          </li>
          <li>
            <Link to="/app/highlights">HIGHLIGHTS</Link>
          </li>
          <li>
            <Link to="/app/players">PLAYERS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
