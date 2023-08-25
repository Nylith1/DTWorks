import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Assets from "./pages/Assets.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
