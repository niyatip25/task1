import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Hooks from "./components/Hooks";
import App from "./App";
import "./index.css";

// eslint-disable-next-line
{
  /* use two routes
   1. hello world 
   2. take array, in return, return button, on button click, display random string, use usestate, and useeffect. on button click, state should
      update, useeffect should get trigered */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/hooks", element: <Hooks /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
