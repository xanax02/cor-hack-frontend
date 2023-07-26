import { createBrowserRouter } from "react-router-dom";
import RootMain from "../pages/RootMain";
import Auth from "../pages/Auth";
import Console from "../pages/Console";
import Project from "../pages/Project";
import CreateApp from "../pages/CreateApp";
import Settings from "../pages/Settings";
import { loader as tokenLoader } from "./tokenLoader";

// routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMain />,
    children: [
      {
        path: "app/:id/",
        element: "",
        children: [{ path: "settings/configure", element: <Settings /> }],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/console",
    element: <Console />,
    loader: tokenLoader,
  },
  {
    path: "/new/project",
    element: <Project />,
    loader: tokenLoader,
  },
  {
    path: "/new/app",
    element: <CreateApp />,
  },
]);
