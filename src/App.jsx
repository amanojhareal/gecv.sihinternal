/**
 * src/App.jsx
 *
 * Wires routes.jsx into React Router, wraps every page in Layout
 * (Navbar + Footer), and wraps lazy-loaded pages in Suspense.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./layout/Layout";
import routes from "./routes";
import Loader from "./components/ui/Loader";
import { verifyExternalLinks } from './utils/verifyExternalLinks';

// remove before deploy
if (import.meta.env.DEV) verifyExternalLinks();

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
