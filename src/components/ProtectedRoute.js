import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { appContext } from "../context/AppContext";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(appContext);
  if (!isLoggedIn) {
    // user is not authenticated
    console.log(isLoggedIn,'kkkk')
    return <Navigate to="/" />;
  }
  return children;
};
