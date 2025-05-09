import { useEffect, useState } from "react";

const NewsCard = ({ Title, Description, Date, Author, ImageUrl }) => {
  return (
    <div className="card bg-base-100 w-auto h-[100%]  shadow-sm relative">
      <figure className="relative h-[85%]">
        <img
          src={ImageUrl}
          alt="Shoes"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50 "></div>
      </figure>

      <div className="card-body gap-0">
        <h2 className="card-title">{Title}</h2>
        <p>{Description}</p>
        <p>{Date}</p>
        <p>by: {Author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
