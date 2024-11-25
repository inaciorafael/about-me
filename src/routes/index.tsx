import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "../pages/Root/Root.component";
import Home from "../pages/Home";
import Works from "../pages/Works";
import PersonalProjects from "../pages/PersonalProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/projects',
        element: <PersonalProjects />,
      },
    ]
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
