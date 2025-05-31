import HeadNewsCard from "./HeadNewsCard";
import NewsCard from "./NewsCard";
import NewsCardSide from "./NewsCardSide";
import useNews from "../../../hooks/useNews";
import Loader from "../../common/Loader";
import useImagesLoaded from "../../../hooks/useImagesLoaded";

const LargeScreenNews = () => {
  const { news: valorantArticles, loading } = useNews(null, null);

  const imageUrls = [
    ...(valorantArticles
      ? valorantArticles.map((article) => article.image)
      : []),
  ];

  const allLoaded = useImagesLoaded(imageUrls);

  if (loading || !allLoaded) {
    return <Loader />;
  }

  return (
    <div className="hidden sm:grid sm:grid-cols-1 sm:gap-2 px-6 lg:grid-cols-3">
      <div className="row-span-2 col-span-2">
        <a
          href={valorantArticles[0]?.article_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeadNewsCard
            Title={valorantArticles[0]?.title}
            Description={valorantArticles[0]?.description}
            Date={valorantArticles[0]?.date}
            Author={valorantArticles[0]?.author}
            ImageUrl={valorantArticles[0]?.image}
          />
        </a>
      </div>

      <div className="sm:hidden lg:block lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <a
          href={valorantArticles[1]?.article_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <NewsCard
            Title={valorantArticles[1]?.title}
            Description={valorantArticles[1]?.description}
            Date={valorantArticles[1]?.date}
            Author={valorantArticles[1]?.author}
            ImageUrl={valorantArticles[1]?.image}
          />
        </a>
      </div>

      <div className="col-span-2 grid grid-cols-2 lg:col-span-3 lg:grid-cols-3 gap-2">
        <div className="pb-2">
          <a
            href={valorantArticles[2]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={valorantArticles[2]?.title}
              Description={valorantArticles[2]?.description}
              Date={valorantArticles[2]?.date}
              Author={valorantArticles[2]?.author}
              ImageUrl={valorantArticles[2]?.image}
            />
          </a>
        </div>
        <div className="pb-2">
          <a
            href={valorantArticles[3]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={valorantArticles[3]?.title}
              Description={valorantArticles[3]?.description}
              Date={valorantArticles[3]?.date}
              Author={valorantArticles[3]?.author}
              ImageUrl={valorantArticles[3]?.image}
            />
          </a>
        </div>
        <div className="pb-2">
          <a
            href={valorantArticles[4]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={valorantArticles[4]?.title}
              Description={valorantArticles[4]?.description}
              Date={valorantArticles[4]?.date}
              Author={valorantArticles[4]?.author}
              ImageUrl={valorantArticles[4]?.image}
            />
          </a>
        </div>
        <div className="pb-2 lg:hidden">
          <a
            href={valorantArticles[1]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={valorantArticles[1]?.title}
              Description={valorantArticles[1]?.description}
              Date={valorantArticles[1]?.date}
              Author={valorantArticles[1]?.author}
              ImageUrl={valorantArticles[1]?.image}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenNews;
