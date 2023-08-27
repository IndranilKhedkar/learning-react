import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const isMenuCollapsed = useSelector((store) => store.app.isMenuCollapsed);

  return (
    !isMenuCollapsed && (
      <div className="p-3 m-3 shadow-md w-52">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <hr className="mt-5 mb-2" />
        <h2 className="font-bold">Subscriptions</h2>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <hr className="mt-5 mb-2" />
        <h2 className="font-bold">Explore</h2>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};
