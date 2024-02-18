import "./App.css";

import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
     // const user = window.localStorage.getItem("user");
      resolve('resolved');
    }, 3000)
  );

 
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route exact path="/" element={<LoginPage />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
