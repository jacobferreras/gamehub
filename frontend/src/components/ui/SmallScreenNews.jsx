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
          "http://localhost:5000/articles?limit=4"
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
            Title="DOTA 2"
            Description="ADAASDASD"
            ImageUrl="https://hawk.live/storage/post-images/nightfall-left-tundr-esports-17946.jpg"
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={articles[1]?.title}
            Description={articles[1]?.description}
            ImageUrl={articles[1]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title="PUBG"
            Description="ADAASDASD"
            ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title="Valorant"
            Description="ADAASDASD"
            ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNews;
