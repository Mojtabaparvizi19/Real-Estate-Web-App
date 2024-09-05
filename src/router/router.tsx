import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../HomePage";
import ListPage from "../components/listPage/ListPage";
import DetailPage from "../components/listPage/DetailPage";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import routes from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: routes.contact,
      },
      {
        path: routes.list,
        element: <ListPage />,
      },
      {
        path: `${routes.list}/:id`,
        element: <DetailPage />,
      },
      {
        path: routes.login,
        element: <Login sendData={(data: object) => console.log(data)} />,
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
    ],
  },
]);

export default router;
