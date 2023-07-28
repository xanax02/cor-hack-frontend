import { createBrowserRouter } from "react-router-dom";
import RootMain from "../pages/RootMain";
import Auth from "../pages/Auth";
import Console from "../pages/Console";
import Project from "../pages/Project";
import CreateApp from "../pages/CreateApp";
import Settings from "../pages/Settings";
import { loader as tokenLoader } from "./tokenLoader";
import ErrorElement from "../components/layout/ErrorElement";

// routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMain />,
    loader: tokenLoader,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "app/:id/",
        loader: tokenLoader,
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
    loader: tokenLoader,
  },
]);
