import React from "react";

const NewsCard = ({ Title, Description, ImageUrl, Width }) => {
  return (
    <div
      className="card bg-transparent shadow-sm"
      style={{ width: `${Width}px` }}
    >
      <figure>
        <img src={ImageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
