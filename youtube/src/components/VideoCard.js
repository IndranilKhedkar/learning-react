import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <Link to={`/watch?v=${video.id}`}>
      <div className="m-2 h-full w-72 hover:bg-slate-50">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className="px-2 pt-2">
          <p className="text-md font-semibold">
            {title.length < 75 ? title : `${title.substring(0, 75)}...`}
          </p>
          <div className="text-gray-600 text-sm pt-1">
            <p>{channelTitle}</p>
            <span>
              {formatter.format(statistics.viewCount)} views {" • "}
              {formatDistance(new Date(publishedAt), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
