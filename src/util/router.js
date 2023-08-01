import { createBrowserRouter } from "react-router-dom";
import RootMain from "../pages/RootMain";
import Auth from "../pages/Auth";
import Console from "../pages/Console";
import Project from "../pages/Project";
import CreateApp from "../pages/CreateApp";
import Settings from "../pages/Settings";
import { loader, loader as tokenLoader } from "./tokenLoader";
import ErrorElement from "../components/layout/ErrorElement";
import Dashboard from "../pages/Dashboard";
import Bundles from "../pages/Bundles";
import Systems from "../pages/Systems";
import SystemDetail from "../pages/SystemDetail";
import BundlesDetails from "../pages/BundlesDetails";
import LogAnalysis from "../pages/LogAnalysis";

// routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMain />,
    loader: tokenLoader,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        loader: tokenLoader,
        element: (
          <h1 className="text-center text-2xl mt-10 font-semibold">
            Please select an app
          </h1>
        ),
      },
      {
        path: "app/:id/",
        loader: tokenLoader,
        element: "",
        children: [
          { path: "dashboard", loader: tokenLoader, element: <Dashboard /> },
          {
            path: "settings/configure",
            loader: tokenLoader,
            element: <Settings />,
          },
          { path: "bundles", loader: tokenLoader, element: <Bundles /> },
          {
            path: "bundles/details/:reportId",
            loader: tokenLoader,
            element: <BundlesDetails />,
            children: [
              {
                path: "logs",
                loader: tokenLoader,
                element: <LogAnalysis />,
              },
            ],
          },
          {
            path: "systems/",
            loader: tokenLoader,
            element: <Systems />,
          },
          {
            path: "system/details/:hostname",
            loader: tokenLoader,
            element: <SystemDetail />,
          },
        ],
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
