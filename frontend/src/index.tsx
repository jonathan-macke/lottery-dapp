import React from "react";
import ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Error";
import Main from "./pages/Main";
import Voting from "./pages/Voting";
import Utilities from "./pages/Utilities";

import { MetaMaskProvider } from "metamask-react";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/voting",
        element: <Voting />,
      },
      {
        path: "/utilities",
        element: <Utilities />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MetaMaskProvider>
      <RouterProvider router={router} />
    </MetaMaskProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
