import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Hello React 🚀!!
  </h1>
);

// React Component
// - Class based Components

// - Functional Components
const Main = () => (
  <>
    <Title />
    <div>This is react functional component.</div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<Main />);
