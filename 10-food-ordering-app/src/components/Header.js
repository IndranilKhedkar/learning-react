import { Link } from "react-router-dom";
import { LOGO_URL } from "../tools/constants";

export const Header = () => {
  return (
    <div className="flex justify-between mb-6 bg-slate-200 border border-solid border-blue-300 shadow-md">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 p-3 m-3" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
