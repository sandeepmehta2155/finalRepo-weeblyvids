import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./Video-Context/Video-Provider";
import { AuthProvider } from "./Login/auth-context";

export { RedirectPage } from "./Redirect-Page/Redirect-Page";
export { Header } from "./Components/Header";
export { Navigation } from "./Components/Navigation";
export { Home } from "./Components/Home";
export { VideoPage } from "./Components/Video-Page";
export { RouteComponents } from "./Route-Components/Route-Components";
export { HistoryPage } from "./History-Page/History-Page";
export { LikedVideos } from "./Liked-Videos/Liked-Videos";
export { Subscription } from "./Subscription-Page/Subscription-Page";
export { WatchLater } from "./Watch-Later/WatchLater-Page";
export { Login } from "./Login/Login";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
