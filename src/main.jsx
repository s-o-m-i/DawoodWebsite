import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { ChakraProvider } from "@chakra-ui/react";
import Partner from "./pages/Partner/Partner";
import ContactUs from "./pages/ContactUs/ContactUs";
import DataProvider from "./components/DataProvider";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/partner", element: <Partner /> },
  { path: "/partner", element: <Partner /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
    </ChakraProvider>
  </React.StrictMode>
);
