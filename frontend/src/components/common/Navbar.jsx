import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/GameHub_logo.png"; // Adjust the path as necessary
const Navbar = () => {
  const [drawerMatchesOpen, setDrawerMatchesOpen] = useState(false);

  return (
    <div className="drawer font-body">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-transparent backdrop-blur-md fixed top-0 z-10 w-full lg:px-10 font-body">
          <div className="flex-none lg:hidden ">
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

          <Link
            to="/app/home"
            className="flex-1 flex justify-center md:justify-end lg:justify-start px-2 pb-2 font-body"
          >
            <img src={Logo} alt="" className="h-auto w-auto" />
          </Link>

          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal font-semibold px-1 font-body text-white">
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
      <div className="drawer-side z-[100] fixed top-0 left-0 w-full h-full font-body">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative w-80 min-h-full h-full">
          <ul className="menu bg-neutral-950 min-h-full w-80 p-4 pt-20 z-[101] relative shadow-2xl border-l border-neutral-800 font-body">
            <li>
              <Link
                to="/app/home"
                onClick={() => {
                  document.getElementById("my-drawer-3").checked = false;
                  setDrawerMatchesOpen(false);
                }}
              >
                HOME
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex items-center w-full cursor-pointer focus:outline-none"
                onClick={() => setDrawerMatchesOpen((open) => !open)}
                aria-expanded={drawerMatchesOpen}
                aria-controls="drawer-matches-dropdown"
              >
                <span className="flex-1 text-left">MATCHES</span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    drawerMatchesOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {drawerMatchesOpen && (
                <ul
                  id="drawer-matches-dropdown"
                  className="pl-4 py-1 mt-1 space-y-1 bg-neutral-950 rounded-md border border-neutral-800 shadow-lg"
                >
                  <li className="hover:text-red-500">
                    <Link
                      to="/app/matches"
                      onClick={() => {
                        document.getElementById("my-drawer-3").checked = false;
                        setDrawerMatchesOpen(false);
                      }}
                    >
                      Schedule
                    </Link>
                  </li>
                  <li className="hover:text-red-500">
                    <Link
                      to="/app/matches/result"
                      onClick={() => {
                        document.getElementById("my-drawer-3").checked = false;
                        setDrawerMatchesOpen(false);
                      }}
                    >
                      Result
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/app/news/article"
                onClick={() => {
                  document.getElementById("my-drawer-3").checked = false;
                  setDrawerMatchesOpen(false);
                }}
              >
                NEWS
              </Link>
            </li>
            <li>
              <Link
                to="/app/agents"
                onClick={() => {
                  document.getElementById("my-drawer-3").checked = false;
                  setDrawerMatchesOpen(false);
                }}
              >
                AGENTS
              </Link>
            </li>
            <li>
              <Link
                to="/app/highlights"
                onClick={() => {
                  document.getElementById("my-drawer-3").checked = false;
                  setDrawerMatchesOpen(false);
                }}
              >
                HIGHLIGHTS
              </Link>
            </li>
            <li>
              <Link
                to="/app/players"
                onClick={() => {
                  document.getElementById("my-drawer-3").checked = false;
                  setDrawerMatchesOpen(false);
                }}
              >
                PLAYERS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
