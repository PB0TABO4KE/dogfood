import React from "react";
import ReactDOM from "react-dom/client"; // в кавычках название папки в node modules//
import App from "./App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(
  React.createElement("h1", {title: "Doggy"}, "Hello React!")
);*/

root.render(
  <App/>
)
