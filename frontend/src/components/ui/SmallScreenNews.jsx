import HeadNewsCard from "../common/HeadNewsCard";
import NewsCardSide from "../common/NewsCardSide";

const SmallScreenNews = () => {
  return (
    <div className="block sm:hidden">
      <div className="justify-start pb-3 px-2">
        <HeadNewsCard
          Title="DOTA 2"
          Description="ADAASDASD"
          ImageUrl="https://hawk.live/storage/post-images/nightfall-left-tundr-esports-17946.jpg"
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
            Title="Valorant"
            Description="ADAASDASD"
            ImageUrl="https://od2-image-api.abs-cbn.com/prod/editorImage/1746436948630050525_Paper%20Rex.jpg"
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
