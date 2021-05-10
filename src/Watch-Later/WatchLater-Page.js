import { useVid } from "../Video-Context/Video-Provider";
import { Link } from "react-router-dom";
import * as useComponent from "../index";

export function WatchLater() {
  const { videoSrc } = useVid();

  return (
    <>
      <useComponent.Navigation />
      <div className="WatchLaterItems">
        <h1 className="WatchLaterTag"> WatchLater</h1>
        <ul>
          {videoSrc.map(
            ({ watchLater, videoDetails, srcLinks }) =>
              watchLater === "yes" && (
                <li key={videoDetails.id} className="WatchLaterList">
                  <Link to={`/video/${videoDetails.id}`} key={videoDetails.id}>
                    <img
                      className="videoSnippet WatchLater"
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
