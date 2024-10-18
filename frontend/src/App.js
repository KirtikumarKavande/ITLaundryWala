import { useEffect } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import RootComponent from "./components/RootComponent";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home/Home";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import AdminPannel from "./components/AdminPannel";
import AddNewUser from "./components/Admin/AddNewUser";
import ExistingUser from "./components/Admin/ExistingUser";
import Invoice from "./components/Invoice/Invoice";
import BarcodePrinting from "./components/Barcode/BarcodePrinting";
import OnlineOrderDetails from "./components/Admin/OnlineOrderDetails";
import CustomerSelfContactDetailProvider from "./context/customerSelfContactDetails/CustomerSelfContactDetailProvider";

// PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const user = useSelector((store) => store.user.isLoggedIn);
  return user === "user" ? element : <Navigate to="/login" replace />;
};

export default function App() {
  const user = useSelector((store) => store.user.isLoggedIn);

  useEffect(() => {
    const handlePopState = (event) => {
      // Prevent back navigation to routes that the user shouldn't access
      if (!user && window.location.pathname !== "/login") {
        window.location.replace("/login");
       
      }
      if(window.location.pathname==="/existinguser"){
        setTimeout(()=>{
          window.location.reload()

        },100)

      }
    };

    // Add popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Cleanup listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: user === "user" ? <AddNewUser /> : <Home />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <AdminLogin />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/admin",
          element: <PrivateRoute element={<AdminPannel />} />,
        },
        {
          path: "/adduser",
          element: <PrivateRoute element={<AddNewUser />} />,
        },
        {
          path: "/existinguser",
          element: <PrivateRoute element={<ExistingUser />} />,
        },
        {
          path: "/invoice",
          element: <PrivateRoute element={<Invoice />} />,
        },
        {
          path: "/barcode",
          element: <PrivateRoute element={<BarcodePrinting />} />,
        },
        {
          path: "/request",
          element: <PrivateRoute element={<OnlineOrderDetails />} />,
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
