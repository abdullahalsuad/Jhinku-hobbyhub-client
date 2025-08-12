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
import HobbyTipsDetails from "../components/homePage/HobbyTipsDetails";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import ProfilePage from "../components/dashboard/ProfilePage";
import Community from "../components/dashboard/Community";

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
        path: "/blogs/:id",
        element: <HobbyTipsDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "create-group",
        element: <CreateGroup />,
      },
      {
        path: "my-groups",
        element: <MyGroupsPage />,
      },
      {
        path: "my-groups/update/:id",
        element: <UpdateGroupPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
