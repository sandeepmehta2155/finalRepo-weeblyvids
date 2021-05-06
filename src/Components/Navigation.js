import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <label className="navigationPills">Home</label>
      </Link>
      <Link className="navigationPills" to="/history">
        History
      </Link>
      <Link className="navigationPills" to="/likedvideos">
        Liked videos
      </Link>
      <Link className="navigationPills" to="/subscription">
        Subscriptions
      </Link>
      <Link className="navigationPills" to="/watchlater">
        Watch later
      </Link>
      <Link className="navigationPills" to="/playlist">
        Playlist
      </Link>
    </div>
  );
}
