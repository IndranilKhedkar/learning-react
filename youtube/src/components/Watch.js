import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { ChatSection } from "./ChatSection";
import { CommentSection } from "./CommentSection";

export const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  // const getVideo = async () => {};
  // useEffect(() => {
  //   getVideo();
  // });

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="p-2 m-2 flex flex-col w-full">
      <div className="flex">
        <div>
          <iframe
            width="1000"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            text="YouTube Video Player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-2 w-full h-[600px] border border-slate-300 rounded-lg overflow-y-scroll">
          <ChatSection />
        </div>
      </div>
      <div>
        <CommentSection />
      </div>
    </div>
  );
};
