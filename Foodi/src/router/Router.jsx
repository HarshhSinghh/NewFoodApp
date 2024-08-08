import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Shop/Menu";
import SignUp from "../pages/Shop/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/DashBoard/UpdateProfile";
import Cart from "../pages/Shop/Cart";
import DashboardLayOut from "../layout/DashboardLayOut";
import Users from "../pages/DashBoard/admin/Users";
import DashBoard from "../pages/DashBoard/admin/DashBoard";
import AddMenu from "../pages/DashBoard/admin/AddMenu";
import ManageMenu from "../pages/DashBoard/admin/ManageMenu";
import UpdateMenu from "../pages/DashBoard/admin/UpdateMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/menu",
        element: (
          // Do somthing About this PrivateRouter later
          //<PrivateRouter>
          <Menu />
          //</PrivateRouter>
        ),
      },

      { path: "/updateprofile", element: <UpdateProfile /> },
      { path: "/cartpage", element: <Cart /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayOut />
      </PrivateRouter>
    ),
    children: [
      { path: "", element: <DashBoard /> },
      { path: "home", element: <DashBoard /> },
      { path: "managebooking", element: <Users /> },
      { path: "addmenu", element: <AddMenu /> },
      { path: "managemenu", element: <ManageMenu /> },
      {
        path: "update-menu",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:5173/menu/:${params.id}`),
      },
      // ,  }
      { path: "users", element: <Users /> },
      { path: "menu", element: <Users /> },
      { path: "ordertracking", element: <Users /> },
      { path: "support", element: <Users /> },
      { path: "email", element: <Users /> },
    ],
  },
]);

export default router;
