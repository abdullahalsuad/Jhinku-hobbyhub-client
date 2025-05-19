import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
