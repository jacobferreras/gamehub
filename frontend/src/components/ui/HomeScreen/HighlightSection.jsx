import useHighlights from "../../../hooks/useHighlights";

const GuideSection = () => {
  const { highlights } = useHighlights(1, 4);

  return (
    <div className="px-2 pb-12 gap-4 grid grid-cols-1 lg:grid-cols-2 text-white">
      {highlights.map((highlight, index) => (
        <div
          key={highlight.id || index}
          className="card flex flex-col lg:flex-row w-full bg-transparent shadow-sm mb-0"
        >
          <figure className="w-full lg:w-1/2 flex justify-center items-center">
            <iframe
              width="100%"
              height="200"
              src={highlight.video_url}
              title={highlight.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg min-h-[180px] lg:min-h-[250px] 3xl:min-h-[350px] w-full"
            ></iframe>
          </figure>
          <div className="card-body w-full lg:w-64">
            <div>
              <h2 className="card-title font-heading">{highlight.title}</h2>
              <div>
                <div className="badge badge-outline">{highlight.author}</div>
              </div>
              <div className="pr-0 lg:pr-40">
                <a
                  href={highlight.channel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-xs lg:text-xs 3xl:text-lg overflow-hidden break-all"
                >
                  {highlight.channel}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideSection;
