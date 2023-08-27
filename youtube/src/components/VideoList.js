import { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS } from "../utils/constants";
import { VideoCard } from "./VideoCard";

export const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS);
    const response = await data.json();
    setVideos(response.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap m-2">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};
