import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child1" }, [
    React.createElement("h1", { key: "c1h1" }, "I'm h1 tag"),
    React.createElement("h2", { key: "c1h2" }, "I'm h2 tag"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", { key: "c2h1" }, "I'm h1 tag"),
    React.createElement("h2", { key: "c2h2" }, "I'm h2 tag"),
  ]),
]);

root.render(rootElement);
