import { useVid } from "../Video-Context/Video-Provider";
import { useVideoLibraryReducer } from "../Video-Context/VideoLibrary-Reducer";
import { Link, useNavigate } from "react-router-dom";
import * as useComponent from "../index";
import { ReactComponent as Img } from "./subscription.svg";
import axios from "axios";
import { useState } from "react";

export function Subscription() {
  const { videoSrc } = useVid();

  const { username } = JSON.parse(localStorage.getItem("username")) || {
    username: null
  };

  const { videoDispatch } = useVideoLibraryReducer();
  const navigate = useNavigate();

  const { subscriptions } = JSON.parse(
    localStorage.getItem("subscriptions")
  ) || {
    subscriptions: []
  };

  const [subscription, setSubscription] = useState(subscriptions);

  async function CallSubscriptions() {
    if (username)
      axios
        .get(
          `https://videolib.sandeepmehta215.repl.co/addtosubscription?id=${username}`
        )
        .then((resp) => {
          if (typeof resp.data.subscriptions === "object") {
            localStorage.setItem(
              "subscriptions",
              JSON.stringify({ subscriptions: resp.data.subscriptions })
            );

            setSubscription(resp.data.subscriptions);
          } else {
            setSubscription([]);
          }
        });
  }

  return (
    <>
      <useComponent.Navigation />

      <div className="SubscribedItems">
        <h1 className="SubscriptionTag">Subscription</h1>
        <br />
        <br />

        {username === null && (
          <>
            {" "}
            <Img onClick={() => navigate("/")} className="navigateVideosImg" />
            <button
              className="buttonToNavigateToHome"
              onClick={() => navigate("/")}
            >
              {" "}
              Please login to watch videos
              <br /> added to watch later{" "}
              <span role="img" aria-labelledby="emoji">
                👍
              </span>
            </button>
          </>
        )}
        <ul className="videoBadges">
          {videoSrc.map((obj) => {
            return (
              <>
                <h3>
                  <span>
                    {subscription
                      .map((subscriptionObj) => {
                        if (subscriptionObj !== obj?.videoDetails.streamer)
                          return obj;
                        return undefined;
                      })
                      .filter((key) => key !== undefined).length <
                    subscription.length ? (
                      <>
                        <img
                          className="streamerIconSubscription"
                          src={obj?.videoDetails.streamerIcon}
                          alt="loading"
                        />
                        <span className="streamer">
                          {obj?.videoDetails.streamer}
                        </span>
                        <button
                          className="subscribedTag"
                          onClick={() => {
                            username
                              ? videoDispatch({
                                  type: "SUBSCRIBED",
                                  obj
                                })
                              : navigate("/login");
                            setTimeout(() => CallSubscriptions(), 1000);
                          }}
                        >
                          Subscribed
                        </button>
                      </>
                    ) : (
                      <></>
                    )}{" "}
                  </span>
                </h3>
                {subscription
                  .map((subscriptionObj) => {
                    if (subscriptionObj !== obj?.videoDetails.streamer)
                      return obj;
                    return undefined;
                  })
                  .filter((key) => key !== undefined).length <
                subscription.length ? (
                  <li key={obj?.videoDetails.id} className="SubscriptionList">
                    <Link to={`/video/${obj?.videoDetails.id}`}>
                      <img
                        className="videoSnippet"
                        title={obj?.srcLinks.title}
                        src={obj?.srcLinks.imgSrc}
                        alt="loading"
                      />
                    </Link>

                    <span>{obj?.srcLinks.title}</span>
                  </li>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
