import HeadNewsCard from "../../common/HeadNewsCard";
import NewsCard from "../../common/NewsCard";
import NewsCardSide from "../../common/NewsCardSide";
import { useState, useEffect } from "react";
import axios from "axios";

const LargeScreenNews = () => {
  const [valorantArticles, setValorantArticles] = useState([]);
  const [dotaArticles, setDotaArticles] = useState([]);
  const [pubgArticles, setPubgArticles] = useState([]);

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

    const fetchDotaArticle = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dotaArticles?limit=5"
        );
        setDotaArticles(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching cards:", error);
        setDotaArticles([]);
      }
    };

    const fetchPubgArticle = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/pubgArticles?limit=5"
        );
        setPubgArticles(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching cards:", error);
        setPubgArticles([]);
      }
    };

    fetchArticle(), fetchDotaArticle(), fetchPubgArticle();
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
            Title={dotaArticles[1]?.title}
            Description={dotaArticles[1]?.description}
            Date={dotaArticles[1]?.date}
            Author={dotaArticles[1]?.author}
            ImageUrl={dotaArticles[1]?.image}
          />
        </div>
        <div className="pb-2">
          <NewsCardSide
            Title={pubgArticles[0]?.title}
            Description={pubgArticles[0]?.description}
            Date={pubgArticles[0]?.date}
            Author={pubgArticles[0]?.author}
            ImageUrl={pubgArticles[0]?.image}
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
