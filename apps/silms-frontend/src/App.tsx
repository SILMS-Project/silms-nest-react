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
              path="/login"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Auth/Login"))
                  )}
                </Suspense>
              }
            />
            <Route
              path="/student-dashboard"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Users/Student/StudentDashboard"))
                  )}
                </Suspense>
              }
            />
            <Route
              path="/lecturer-dashboard"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(
                      () => import("@/pages/Users/Lecturer/LecturerDashboard")
                    )
                  )}
                </Suspense>
              }
            />

            <Route
              path="/courses"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Courses/CoursesPage"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/courses/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Courses/CourseDetails"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/courses/enrollment"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Courses/CourseEnrollment"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/courses/:id/assignments/:assignmentid"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Courses/CourseAssignment"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/results"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Results/ResultsPage"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/schedule"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Courses/SchedulePage"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/attendance"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Users/Student/AttendancePage"))
                  )}
                </Suspense>
              }
            />

            <Route
              path="/results/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  {React.createElement(
                    lazy(() => import("@/pages/Results/ResultsDetails"))
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
