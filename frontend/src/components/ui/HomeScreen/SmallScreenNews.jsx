import HeadNewsCard from "./HeadNewsCard";
import NewsCardSide from "./NewsCardSide";
import useNews from "../../../hooks/useNews";

const SmallScreenNews = () => {
  const { news: articles } = useNews(null, null);

  return (
    <div className="block sm:hidden">
      <div className="justify-start pb-3 px-2">
        <a
          href={articles[0]?.article_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeadNewsCard
            Title={articles[0]?.title}
            Description=""
            Date={articles[0]?.date}
            Author={articles[0]?.author}
            ImageUrl={articles[0]?.image}
          />
        </a>
      </div>
      <div className="block px-2 md:px-4">
        <div className="pb-2">
          <a
            href={articles[1]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={articles[1]?.title}
              Description=""
              Date={articles[1]?.date}
              Author={articles[1]?.author}
              ImageUrl={articles[1]?.image}
            />
          </a>
        </div>
        <div className="pb-2">
          <a
            href={articles[2]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={articles[2]?.title}
              Description=""
              Date={articles[2]?.date}
              Author={articles[2]?.author}
              ImageUrl={articles[2]?.image}
            />
          </a>
        </div>
        <div className="pb-2">
          <a
            href={articles[3]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={articles[3]?.title}
              Description=""
              Date={articles[3]?.date}
              Author={articles[3]?.author}
              ImageUrl={articles[3]?.image}
            />
          </a>
        </div>
        <div className="pb-2">
          <a
            href={articles[4]?.article_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NewsCardSide
              Title={articles[4]?.title}
              Description=""
              Date={articles[4]?.date}
              Author={articles[4]?.author}
              ImageUrl={articles[4]?.image}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNews;
