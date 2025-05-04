import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent backdrop-blur-sm fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown block lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/app/home">HOME</Link>
            </li>

            <li>
              <Link to="/app/valorant">VALORANT</Link>
            </li>

            <li>
              <Link to="/app/dota2">DOTA 2</Link>
            </li>
            <li>
              <Link to="/app/pubg">PUBG</Link>
            </li>
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost text-xl hidden lg:block xl:block 2xl:block 3xl:block">
            GameHub
          </a>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost text-xl block lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
          GameHub
        </a>
        <ul class="menu menu-horizontal px-1 hidden lg:flex xl:flex 2xl:flex 3xl:flex">
          <li>
            <Link to="/app/home">HOME</Link>
          </li>

          <li>
            <Link to="/app/valorant">VALORANT</Link>
          </li>

          <li>
            <Link to="/app/dota2">DOTA 2</Link>
          </li>
          <li>
            <Link to="/app/pubg">PUBG</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a>Link</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li>
              <a>Link 1</a>
            </li>
            <li>
              <a>Link 2</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>;
