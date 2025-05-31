import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import usePlayer from "../../../hooks/usePlayer";

const Carousel = () => {
  const limit = 10;
  const random = "true";
  const { players: cards } = usePlayer(1, limit, random);

  return (
    <div className="container mx-auto px-4 py-6 sm:px-32 md:px-2 lg:px-22 xl:px-38 3xl:px-34">
      <div className="text-center mb-4">
        <h1 className="font-bold text-4xl text-white">Top Player</h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1115: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="pb-10 text-white">
                <div className="card bg-neutral-900 w-auto shadow-sm">
                  <figure>
                    <img
                      src={card.image}
                      alt={card.ign}
                      className="h-70 w-full"
                    />
                  </figure>
                  <div className="card-body h-50 overflow-hidden">
                    <h2 className="card-title font-heading">{card.ign}</h2>
                    <p>{card.about}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No cards available</p>
        )}
      </Swiper>
      <Link to="/app/players" className="flex justify-center">
        <button className="btn btn-outline hover:text-red-500 text-white">
          View More
        </button>
      </Link>
    </div>
  );
};

export default Carousel;
