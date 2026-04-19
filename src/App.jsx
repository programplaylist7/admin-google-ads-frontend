import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* ✅ ADD THIS HERE */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            padding: "12px",
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Protected Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
