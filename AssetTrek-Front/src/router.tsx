import { createBrowserRouter } from "react-router-dom";
import Assets from "./pages/Assets";
import DashboardPage from "./pages/DashboardPage";

export const router = createBrowserRouter([
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
