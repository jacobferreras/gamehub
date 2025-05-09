import { useEffect, useState } from "react";

const NewsCard = () => {
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
          setNews(data.data.segments[1]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card bg-base-100 w-auto h-[100%]  shadow-sm relative">
      <figure className="relative h-[85%]">
        <img
          src="https://esports-news.co.uk/wp-content/uploads/2025/05/ezgif-48189712ece2d4.jpg"
          alt="Shoes"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50 "></div>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p>{news.date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
