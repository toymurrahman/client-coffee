import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
  // Import the new layout
import App from "./App";
import AddCoffee from "./components/AddItems/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import About from "./components/About";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,  // Use Layout as the wrapper
    children: [
      {
        index: true,
        element: <App />,
        loader: () => fetch("https://server-coffee-store.vercel.app/coffee"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://server-coffee-store.vercel.app/users"),
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://server-coffee-store.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
