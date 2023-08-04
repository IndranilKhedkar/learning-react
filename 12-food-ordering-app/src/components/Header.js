import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { LOGO_URL } from "../tools/constants";

export const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between mb-6 bg-slate-50 border border-solid border-slate-500 shadow-xl">
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
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <button>Login</button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
