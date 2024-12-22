import BookIcon from "../../icons/BookIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import OrderIcon from "../../icons/OrderIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import SettingsIcon from "../../icons/SettingsIcon";

export const SidebarLinks = {
  admin: {
    name: "Admin",
    links: [
      {
        name: "Dashboard",
        url: "/",
        submenu: [],
        pathMap: ["/"],
        icon: <DashboardIcon />,
      },

      {
        name: "Users",
        url: "users",
        submenu: [],
        pathMap: ["/users"],
        icon: <ProfileIcon />,
      },
      {
        name: "Products",
        url: "products",
        pathMap: ["/products", "/add-product", "/update-product"],
        submenu: [
          {
            name: "Add Product",
            url: "add-product",
          },
          {
            name: "Update Product",
            url: "update-product",
          },
        ],
        icon: <BookIcon />,
      },
      {
        name: "Orders",
        url: "orders",
        pathMap: ["/orders", "/add-order", "/update-order"],
        submenu: [
          {
            name: "Add Order",
            url: "add-order",
          },
          {
            name: "Update Order",
            url: "update-order",
          },
        ],
        icon: <OrderIcon />,
      },
      {
        name: "Settings",
        url: "settings",
        submenu: [],
        pathMap: ["/settings"],
        icon: <SettingsIcon />,
      },
    ],
  },
};
