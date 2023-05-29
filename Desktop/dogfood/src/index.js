import React from "react";
import ReactDOM from "react-dom/client"; // в кавычках название папки в node modules//
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";//
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(
  React.createElement("h1", {title: "Doggy"}, "Hello React!")
);*/

root.render(
  <BrowserRouter><App/></BrowserRouter>
)
