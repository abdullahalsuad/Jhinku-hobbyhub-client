import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AllGroupsPage from "../pages/AllGroupsPage";
import MyGroupsPage from "../pages/MyGroupsPage";
import CreateGroup from "../pages/CreateGroup";
import GroupDetailsPage from "../pages/GroupDetailsPage";
import PrivateRoute from "./PrivateRoute";
import UpdateGroupPage from "../pages/UpdateGroupPage";
import NotFoundPage from "../pages/NotFoundPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,

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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/create-group",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-groups",
        element: (
          <PrivateRoute>
            <MyGroupsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-groups/update/:id",
        element: (
          <PrivateRoute>
            <UpdateGroupPage />
          </PrivateRoute>
        ),
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
