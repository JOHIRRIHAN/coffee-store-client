import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpdateCoffee from "./Components/UpdateCoffee";
import AddCoffee from "./Components/AddCoffee";
import AuthProvider from "./Provider/AuthProvider";
import SignIn from "./Components/SignIn";
import Root from "./Components/Root";
import User from "./Components/User";
import SignUp from "./Components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/",
    element: <Root></Root>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/user",
    element: <User></User>,
    loader: ()=> fetch('http://localhost:5000/user')
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
