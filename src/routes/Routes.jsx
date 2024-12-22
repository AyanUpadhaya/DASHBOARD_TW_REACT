import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Lyaout";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import Users from "../pages/users/Users";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
    { path: "*", element: <div>
      <h2 className="text-4xl font-semibold">PAGE NOT FOUND</h2>
    </div> },
]);
