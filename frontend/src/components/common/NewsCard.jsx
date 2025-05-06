import React from "react";

const NewsCard = ({ Title, Description, ImageUrl, Width }) => {
  return (
    <div
      className="card card-side bg-transparent shadow-sm"
      style={{ width: Width }}
    >
      <figure>
        <img
          src={ImageUrl}
          alt="Movie"
          style={{ width: "150px", height: "150px" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
