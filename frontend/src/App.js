import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootComponent from "./components/RootComponent";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import AdminPannel from "./components/AdminPannel";
import { useSelector } from "react-redux";
import AddNewUser from "./components/Admin/AddNewUser";
import ExistingUser from "./components/Admin/ExistingUser";
import Invoice from "./components/Invoice/Invoice";
import BarcodePrinting from "./components/Barcode/BarcodePrinting";
import CustomerSelfContactDetailProvider from "./context/customerSelfContactDetails/CustomerSelfContactDetailProvider";
import OnlineOrderDetails from "./components/Admin/OnlineOrderDetails";

export default function App() {
  const user = useSelector((store) => store.user.isLoggedIn);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: user === "user" ? <AddNewUser/> : <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: user === "user" ? <AddNewUser/> : <AdminLogin />,
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
          element: user === "user" ? <AddNewUser /> : <Home />,
        },
        {
          path: "/existinguser",
          element: user === "user" ? <ExistingUser /> : <Home />,
        },
        {
          path: "/invoice",
          element: user === "user" ? <Invoice /> : <Home />,
        },
        {
          path: "/barcode",
          element:  user === "user" ? <BarcodePrinting /> : <Home />,
        },
        {
          path: "/request",
          element: user === "user" ? <OnlineOrderDetails /> : <Home />,
        },
      ],
    },
  ]);

  return (
    <CustomerSelfContactDetailProvider>
      <Toaster />
      <RouterProvider router={router} />
    </CustomerSelfContactDetailProvider>
  );
}
