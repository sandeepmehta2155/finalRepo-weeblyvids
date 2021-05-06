import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./Video-Context/Video-Provider";

export { Header } from "./Components/Header";
export { Navigation } from "./Components/Navigation";
export { Home } from "./Components/Home";
export { VideoPage } from "./Components/Video-Page";
export { RouteComponents } from "./Route-Components/Route-Components";
export { HistoryPage } from "./History-Page/History-Page";
export { LikedVideos } from "./Liked-Videos/Liked-Videos";
export { Subscription } from "./Subscription-Page/Subscription-Page";
export { WatchLater } from "./Watch-Later/WatchLater-Page";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </StrictMode>,
  rootElement
);
