import { Link } from "react-router-dom";
import { useVid } from "../Video-Context/Video-Provider";
import * as useComponent from "../index";

export function Home() {
  const { videoSrc, videoDispatch } = useVid();

  return (
    <>
      <useComponent.Navigation />
      <div className="videoBadges">
        <ul className="videoList">
          {videoSrc.map((obj) => (
            <li
              key={obj.videoDetails.id}
              className="videoCard"
              id={obj.videoDetails.id}
              onClick={() => videoDispatch({ type: "addToHistory", obj })}
            >
              <Link to={`/video/${obj.videoDetails.id}`}>
                <img
                  className="videoSnippet"
                  title={obj.videoDetails.title}
                  src={obj.srcLinks?.imgSrc}
                  alt="loading"
                />
                <h3>
                  <img
                    className="streamerIcon"
                    src={obj.videoDetails.streamerIcon}
                    alt="loading"
                  />
                  <span className="streamer"> {obj.videoDetails.streamer}</span>
                </h3>
                <div>{obj.videoDetails.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
