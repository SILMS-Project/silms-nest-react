import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "flowbite";
import { initFlowbite } from "flowbite";
import PageLoader from "./components/PageLoader";
import React from "react";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              {React.createElement(lazy(() => import("@/pages/Home/HomePage")))}
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              {React.createElement(
                lazy(() => import("@/pages/Errors/NotFound"))
              )}
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
