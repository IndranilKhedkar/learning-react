import { Body } from "./Body";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
