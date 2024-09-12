import Contact from "../Contact";
import Home from "../Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);


  export default {
    router,

  }; 