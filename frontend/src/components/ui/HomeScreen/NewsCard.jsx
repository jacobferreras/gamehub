const NewsCard = ({ Title, Description, Date, Author, ImageUrl }) => {
  return (
    <div className="card bg-neutral-900  w-auto h-full shadow-sm relative">
      <figure className="relative aspect-[16/9] h-[85%] w-full">
        <img
          src={ImageUrl}
          alt="News"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50"></div>
      </figure>

      <div className="card-body gap-0">
        <h2 className="card-title font-heading">{Title}</h2>
        <p className="text-white">{Description}</p>
        <p className="text-white">{Date}</p>
        <p className="text-white">by: {Author}</p>
      </div>
    </div>
  );
};

export default NewsCard;
