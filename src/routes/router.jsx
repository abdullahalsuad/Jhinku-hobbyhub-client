import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AllGroupsPage from "../pages/AllGroupsPage";
import MyGroupsPage from "../pages/MyGroupsPage";
import CreateGroup from "../pages/CreateGroup";
import GroupDetailsPage from "../pages/GroupDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/groups",
        element: <AllGroupsPage />,
      },
      {
        path: "/groups/:id",
        element: <GroupDetailsPage />,
      },
      {
        path: "/create-group",
        element: <CreateGroup />,
      },
      {
        path: "/my-groups",
        element: <MyGroupsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
