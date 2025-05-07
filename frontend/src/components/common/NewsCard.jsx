import React from "react";

const NewsCard = ({ Title, Description, ImageUrl }) => {
  return (
    <div className="card card-side bg-red-500 shadow-sm 3xl:w-160 relative">
      <figure className="relative w-[150px] h-[150px]">
        <img
          src={ImageUrl}
          alt="Movie"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50"></div>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
