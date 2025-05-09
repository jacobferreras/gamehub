import HeadNewsCard from "../common/HeadNewsCard";
import NewsCard from "../common/NewsCard";

const LargeScreenNews = () => {
  return (
    <div className="hidden sm:grid sm:grid-cols-1 sm:gap-2 px-6 lg:grid-cols-3">
      <div className="row-span-2 col-span-2">
        <HeadNewsCard />
      </div>

      <div className="sm:hidden lg:block lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        <NewsCard
          Title="Valorant"
          Description="ADAASDASD"
          ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
        />
      </div>

      <div className="col-span-2 grid grid-cols-2 lg:col-span-3 lg:grid-cols-3 gap-2">
        <div className="pb-2">
          <NewsCard
            Title="PUBG"
            Description="ADAASDASD"
            ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
          />
        </div>
        <div className="pb-2">
          <NewsCard
            Title="PUBG"
            Description="ADAASDASD"
            ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
          />
        </div>
        <div className="pb-2">
          <NewsCard
            Title="PUBG"
            Description="ADAASDASD"
            ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
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
