import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "flowbite";
import PageLoader from "@/components/PageLoader";
import React from "react";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  let persister = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Home/HomePage"))
                  )}
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
      </PersistGate>
    </Provider>
  );
}

export default App;
