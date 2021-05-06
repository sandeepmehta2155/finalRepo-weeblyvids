import { useVid } from "../Video-Context/Video-Provider";
import { Link } from "react-router-dom";
import * as useComponent from "../index";

export function HistoryPage() {
  const { videoSrc } = useVid();

  return (
    <>
      <useComponent.Navigation />
      <div className="HistoryItems">
        <h1 className="HistoryTag"> History </h1>
        <ul>
          {videoSrc.map(
            ({ addedInHistory, videoDetails, srcLinks }) =>
              addedInHistory === "yes" && (
                <li key={videoDetails.id} className="HistoryList">
                  <Link to={`/video/${videoDetails.id}`} key={videoDetails.id}>
                    <img
                      className="videoSnippet History"
                      title={videoDetails.title}
                      src={srcLinks.imgSrc}
                      alt="loading"
                    />
                    <br />
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
