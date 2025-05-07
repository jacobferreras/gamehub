import React from "react";

const NewsCard = ({ Title, Description, ImageUrl }) => {
  return (
    <div className="shadow-sm w-full relative">
      <div className="absolute z-10 flex flex-col justify-center items-start p-4 text-white bottom-2 left-0 3xl:bottom-6">
        <h2 className="font-bold text-lg">{Title}</h2>
        <p className="text-sm font-semibold">{Description}</p>
      </div>
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={ImageUrl}
          alt="Shoes"
        />
        <div className="absolute inset-0 bg-black opacity-65 hover:opacity-70"></div>
      </div>
    </div>
  );
};

export default NewsCard;
