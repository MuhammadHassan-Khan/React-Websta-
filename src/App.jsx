import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Bloges } from "./pages/Bloges";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Pageerror } from "./pages/Pageerror";
import { Contact } from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/Bloges",
      element: <Bloges />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "/Services",
      element: <Services />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Pageerror />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
