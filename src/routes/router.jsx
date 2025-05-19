import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AllGroupsPage from "../pages/AllGroupsPage";
import MyGroupsPage from "../pages/MyGroupsPage";
import CreateGroup from "../pages/CreateGroup";

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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/groups",
        element: <AllGroupsPage />,
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
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
