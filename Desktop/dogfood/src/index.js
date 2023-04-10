import React from "react";
import ReactDOM from "react-dom/client"; // в кавычках название папки в node modules//
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(
  React.createElement("h1", {title: "Doggy"}, "Hello React!")
);*/

root.render(
  <div title="Doggy">
    <h1>Hello</h1>
    <h2>
      <mark>React</mark>
    </h2>
  </div>
)
