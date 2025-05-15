import HeadNewsCard from "../../common/HomeScreen/HeadNewsCard";
import NewsCard from "../../common/HomeScreen/NewsCard";
import NewsCardSide from "../../common/HomeScreen/NewsCardSide";
import { useState, useEffect } from "react";
import axios from "axios";

const LargeScreenNews = () => {
  const [valorantArticles, setValorantArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/articles?limit=5"
        );
        setValorantArticles(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching cards:", error);
        setValorantArticles([]);
      }
    };

    fetchArticle();
  }, []);
  return (
    <div className="hidden sm:grid sm:grid-cols-1 sm:gap-2 px-6 lg:grid-cols-3">
      <div className="row-span-2 col-span-2">
        <HeadNewsCard
          Title={valorantArticles[0]?.title}
          Description={valorantArticles[0]?.description}
          Date={valorantArticles[0]?.date}
          Author={valorantArticles[0]?.author}
          ImageUrl={valorantArticles[0]?.image}
        />
      </div>

      <div className="sm:hidden lg:block lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <NewsCard
          Title={valorantArticles[1]?.title}
          Description={valorantArticles[1]?.description}
          Date={valorantArticles[1]?.date}
          Author={valorantArticles[1]?.author}
          ImageUrl={valorantArticles[1]?.image}
        />
      </div>

      <div className="col-span-2 grid grid-cols-2 lg:col-span-3 lg:grid-cols-3 gap-2">
        <div className="pb-2">
          <NewsCardSide
            Title={valorantArticles[2]?.title}
            Description={valorantArticles[2]?.description}
            Date={valorantArticles[2]?.date}
            Author={valorantArticles[2]?.author}
            ImageUrl={valorantArticles[2]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={valorantArticles[3]?.title}
            Description={valorantArticles[3]?.description}
            Date={valorantArticles[3]?.date}
            Author={valorantArticles[3]?.author}
            ImageUrl={valorantArticles[3]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={valorantArticles[4]?.title}
            Description={valorantArticles[4]?.description}
            Date={valorantArticles[4]?.date}
            Author={valorantArticles[4]?.author}
            ImageUrl={valorantArticles[4]?.image}
          />
        </div>
        <div className="pb-2 lg:hidden">
          <NewsCardSide
            Title={valorantArticles[1]?.title}
            Description={valorantArticles[1]?.description}
            Date={valorantArticles[1]?.date}
            Author={valorantArticles[1]?.author}
            ImageUrl={valorantArticles[1]?.image}
          />
        </div>
      </div>
    </div>
  );
};

export default LargeScreenNews;
