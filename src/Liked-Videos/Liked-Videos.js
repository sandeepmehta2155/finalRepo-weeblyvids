import { useVid } from "../Video-Context/Video-Provider";
import { Link } from "react-router-dom";
import * as useComponent from "../index";

export function LikedVideos() {
  const { videoSrc } = useVid();
  return (
    <>
      <useComponent.Navigation />
      <div className="LikedItems">
        <h1 className="LikedTag">Liked Videos</h1>
        <ul>
          {videoSrc.map(
            ({ isVideoLiked, videoDetails, srcLinks }) =>
              isVideoLiked === "yes" && (
                <li key={videoDetails.id} className="LikedList">
                  <Link to={`/video/${videoDetails.id}`} key={videoDetails.id}>
                    <img
                      className="videoSnippet Liked"
                      title={videoDetails.title}
                      src={srcLinks.imgSrc}
                      alt="loading"
                    />
                    <h3>{videoDetails.title}</h3>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
