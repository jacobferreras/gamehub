import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GuideSection = () => {
  const [higlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/gameHighlights?limit=4&random=true"
        );
        setHighlights(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching highlights:", error);
        setHighlights([]);
      }
    };

    fetchHighlights();
  }, []);

  return (
    <div className="px-4 pb-20 gap-4 grid grid-cols-1 sm:grid-cols-2">
      {higlights.map((highlight, index) => (
        <div
          key={highlight.id || index}
          className="card lg:card-side w-auto lg:w-auto sm:w-90 bg-transparent shadow-sm mb-0"
        >
          <figure className="w-full lg:w-1/2 flex justify-center items-center">
            <iframe
              width="100%"
              height="350"
              src={highlight.video_url}
              title={highlight.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg min-h-[200px] lg:min-h-[250px] 3xl:min-h-[350px] "
            ></iframe>
          </figure>
          <div className="card-body lg:w-64">
            <div>
              <h2 className="card-title">{highlight.title}</h2>
              <div>
                <div className="badge badge-outline">{highlight.author}</div>
              </div>
              <a
                href={highlight.channel}
                target="blank"
                rel="noopener noreferrer"
                className="text-blue-700 lg:text-xs 3xl:text-lg"
              >
                {highlight.channel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideSection;
