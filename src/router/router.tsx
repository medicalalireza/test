import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services/Services";
import Products from "../pages/Shop/Products";
import Hotel from "../pages/Services/Hotel";
import HotelSingle from "../pages/Services/HotelSingle";
import Project from "../pages/Project/Project";
import Gameplay from "../pages/Project/Gameplay";
import Voice from "../pages/Project/Voice";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services/", element: <Services /> },
  { path: "/services/hotel/", element: <Hotel /> },
  { path: "/services/hotel/:id", element: <HotelSingle /> },
  { path: "/shop/", element: <Products /> },
  { path: "/contactus/", element: <ContactUs /> },
  { path: "/project/", element: <Project /> },
  { path: "/project/gameplay", element: <Gameplay /> },
  { path: "/project/gameplay/voice/", element: <Voice /> },
]);

export default router;
