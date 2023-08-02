import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <UserContext.Provider value={{ loggedInUser: "Indranil Khedkar" }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
