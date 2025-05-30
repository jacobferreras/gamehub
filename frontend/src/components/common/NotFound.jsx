import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="mb-6">Page Not Found</p>
    <Link to="/app/home" className="btn btn-primary">
      Go Home
    </Link>
  </div>
);

export default NotFound;
