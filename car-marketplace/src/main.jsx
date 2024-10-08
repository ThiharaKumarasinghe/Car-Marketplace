import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
// import router from "./router/Router.jsx";
import Home from "./Home";
import Contact from "./Contact";
import Profile from "./profile/Profile";
import AddListing from "./add-Listing/AddListing";
import { Toaster } from "./components/ui/sonner";
import SearchByCategory from "./seach/[category]/SearchByCategory";
import SearchByOption from "./seach/SearchByOption";
import ListingDetails from "./listing-details/[id]/ListingDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add-listing",
    element: <AddListing />,
  },
  {
    path: "/search/:category",
    element: <SearchByCategory />,
  },
  {
    path: "/search",
    element: <SearchByOption />,
  },
  {
    path: "/listing-details/:id",
    element: <ListingDetails />,
  },
  
  
  
]);


// Authentication
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
