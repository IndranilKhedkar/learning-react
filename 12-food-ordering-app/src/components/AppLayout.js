import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { appStore } from "../tools/store";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Indranil Khedkar" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
