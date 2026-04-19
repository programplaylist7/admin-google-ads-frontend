import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useSelector((state) => state.admin);

  // 🔥 wait until auth check completes
  if (loading) return <div>Loading...</div>;

  if (!admin) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
