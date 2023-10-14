import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import AdminPannel from "./components/AdminPannel";
import { useSelector } from "react-redux";
import AddNewUser from "./components/Admin/AddNewUser";
import ExistingUser from "./components/Admin/ExistingUser";

export default function App() {
  const user = useSelector((store) => store.user.isLoggedIn);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: <AdminLogin />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/admin",
          element: user === "user" ? <AdminPannel /> : <AdminLogin />,
        },
        {
          path: "/adduser",
          element: <AddNewUser/>,
        },
        {
          path: "/existinguser",
          element: <ExistingUser/>,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
