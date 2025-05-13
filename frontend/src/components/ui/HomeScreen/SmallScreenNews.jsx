import HeadNewsCard from "../../common/HeadNewsCard";
import NewsCardSide from "../../common/NewsCardSide";
import { useState, useEffect } from "react";
import axios from "axios";

const SmallScreenNews = () => {
  const [articles, setArticles] = useState([]);
  const [dotaArticles, setDotaArticles] = useState([]);
  const [pubgArticles, setPubgArticles] = useState([]);

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
      </div>
    </div>
  );
};

export default SmallScreenNews;
