import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UpdateCoffee from "./Components/UpdateCoffee";
import AddCoffee from "./Components/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
