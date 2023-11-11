import { createBrowserRouter } from "react-router-dom";
import Assets from "./pages/Assets";
import DashboardPage from "./pages/DashboardPage";
import ForCandelaPage from "./pages/ForCandela/ForCandelaPage";

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
      {
        path: "/forcandela",
        element: <ForCandelaPage />,
      },
    ],
  },
]);
