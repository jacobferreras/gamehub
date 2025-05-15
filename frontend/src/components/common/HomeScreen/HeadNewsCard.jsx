import { useEffect, useState } from "react";

const HeadNewsCard = ({ Title, Description, Date, Author, ImageUrl }) => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://vlrggapi.vercel.app/news"
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data &&
          data.data &&
          data.data.segments &&
          data.data.segments.length > 0
        ) {
          setNews(data.data.segments[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shadow-sm w-full relative group">
      <div className="absolute z-10 flex flex-col justify-center items-start p-4 text-white bottom-2 left-0 3xl:bottom-0 gap-0">
        <h2 className="font-bold text-lg">{Title}</h2>
        <p className="text-sm font-semibold">{Description}</p>
        <p className="text-sm font-semibold">{Date}</p>
        <p className="text-sm font-semibold">by: {Author}</p>
      </div>
      <div className="relative">
        <img
          className="w-full h-auto rounded-md  sm:rounded-md md:rounded-lg lg:rounded-xl"
          src={ImageUrl}
          alt="Shoes"
        />
        <div className="absolute inset-0 bg-black opacity-65 group-hover:opacity-70 transition-opacity duration-200 rounded-md sm:rounded-md md:rounded-xl lg:rounded-xl"></div>
      </div>
    </div>
  );
};

export default HeadNewsCard;
