import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import { LoginPage } from "./pages/login/LoginPage";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <AppContextProvider>
      <Routes>
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
      </Routes>
    </AppContextProvider>
  );
}

export default App;
