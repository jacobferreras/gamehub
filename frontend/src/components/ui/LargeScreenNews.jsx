import HeadNewsCard from "../common/HeadNewsCard";
import NewsCard from "../common/NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";

const LargeScreenNews = () => {
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
    <div className="hidden sm:grid sm:grid-cols-1 sm:gap-2 px-6 lg:grid-cols-3">
      <div className="row-span-2 col-span-2">
        <HeadNewsCard
          Title={articles[0]?.title}
          Description=""
          Date={articles[0]?.date}
          Author={articles[0]?.author}
          ImageUrl={articles[0]?.image}
        />
      </div>

      <div className="sm:hidden lg:block lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <NewsCard
          Title={articles[1]?.title}
          Description={articles[1]?.description}
          Date={articles[1]?.date}
          Author={articles[1]?.author}
          ImageUrl={articles[1]?.image}
        />
      </div>

      <div className="col-span-2 grid grid-cols-2 lg:col-span-3 lg:grid-cols-3 gap-2">
        <div className="pb-2">
          <NewsCard
            Title={articles[2]?.title}
            Description={articles[2]?.description}
            Date={articles[2]?.date}
            Author={articles[2]?.author}
            ImageUrl={articles[2]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCard
            Title={articles[3]?.title}
            Description={articles[3]?.description}
            Date={articles[3]?.date}
            Author={articles[3]?.author}
            ImageUrl={articles[3]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCard
            Title={articles[4]?.title}
            Description={articles[4]?.description}
            Date={articles[4]?.date}
            Author={articles[4]?.author}
            ImageUrl={articles[4]?.image}
          />
        </div>
        <div className="pb-2 lg:hidden">
          <NewsCard
            Title="PUBG"
            Description="ADAASDASD"
            ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default LargeScreenNews;
