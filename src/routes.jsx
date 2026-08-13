
import { lazy } from "react";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const CoordinatorsPage = lazy(() => import("./pages/CoordinatorsPage/CoordinatorsPage"));
const FaqPage = lazy(() => import("./pages/FaqPage/FaqPage"));

export const ROUTE_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  REGISTER: "/register",
  CONTACT: "/contact",
  COORDINATORS: "/coordinators",
  FAQ: "/faq",
};

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: LandingPage,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    element: AboutPage,
  },
  {
    path: ROUTE_PATHS.REGISTER,
    element: RegisterPage,
  },
  {
    path: ROUTE_PATHS.CONTACT,
    element: ContactPage,
  },
  {
    path: ROUTE_PATHS.COORDINATORS,
    element: CoordinatorsPage,
  },
  {
    path: ROUTE_PATHS.FAQ,
    element: FaqPage,
  },
];

export default routes;
