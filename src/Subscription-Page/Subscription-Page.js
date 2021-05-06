import { useVid } from "../Video-Context/Video-Provider";
import { Link } from "react-router-dom";
import * as useComponent from "../index";

export function Subscription() {
  const { videoSrc } = useVid();
  return (
    <>
      <useComponent.Navigation />
      <div className="SubscribedItems">
        <h1 className="SubscriptionTag">Subscription</h1>
        <ul>
          {videoSrc.map(
            ({ subscription, videoDetails, srcLinks }) =>
              subscription === "yes" && (
                <li key={videoDetails.id} className="SubscriptionList">
                  <Link to={`/video/${videoDetails.id}`} key={videoDetails.id}>
                    <img
                      className="videoSnippet Subscription"
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
