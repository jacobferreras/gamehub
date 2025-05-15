import { useEffect, useState } from "react";

const NewsCard = ({ Title, Description, Date, Author, ImageUrl }) => {
  return (
    <div className="card bg-zinc-800  w-auto h-full shadow-sm relative">
      <figure className="relative aspect-[16/9] h-[85%] w-full">
        <img src={ImageUrl} alt="News" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50"></div>
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
