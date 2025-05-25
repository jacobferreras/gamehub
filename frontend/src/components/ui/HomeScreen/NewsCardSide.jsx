const NewsCard = ({ Title, Description, Date, Author, ImageUrl }) => {
  return (
    <div className="card bg-neutral-900 w-auto h-full shadow-sm relative">
      <figure className="relative aspect-[16/9] w-full">
        <img src={ImageUrl} alt="News" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50"></div>
      </figure>

      <div className="card-body gap-0 ">
        <div className="bottom-0">
          <h2 className="card-title">{Title}</h2>
          <p>{Description}</p>
          <p>{Date}</p>
          <p>by: {Author}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
