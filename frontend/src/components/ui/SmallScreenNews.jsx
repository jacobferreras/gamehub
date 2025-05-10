import HeadNewsCard from "../common/HeadNewsCard";
import NewsCardSide from "../common/NewsCardSide";
import { useState, useEffect } from "react";
import axios from "axios";

const SmallScreenNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/articles?limit=5"
        );
        setArticles(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching cards:", error);
        setArticles([]);
      }
    };

    fetchArticle();
  }, []);
  return (
    <div className="block sm:hidden">
      <div className="justify-start pb-3 px-2">
        <HeadNewsCard
          Title={articles[0]?.title}
          Description=""
          Date={articles[0]?.date}
          Author={articles[0]?.author}
          ImageUrl={articles[0]?.image}
        />
      </div>
      <div className="block px-2 md:px-4">
        <div className="pb-2">
          <NewsCardSide
            Title={articles[1]?.title}
            Description=""
            Date={articles[1]?.date}
            Author={articles[1]?.author}
            ImageUrl={articles[1]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={articles[2]?.title}
            Description=""
            Date={articles[2]?.date}
            Author={articles[2]?.author}
            ImageUrl={articles[2]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={articles[3]?.title}
            Description=""
            Date={articles[3]?.date}
            Author={articles[3]?.author}
            ImageUrl={articles[3]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={articles[4]?.title}
            Description=""
            Date={articles[4]?.date}
            Author={articles[4]?.author}
            ImageUrl={articles[4]?.image}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNews;
