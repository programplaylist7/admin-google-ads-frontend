import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { admin, loading } = useSelector((state) => state.admin);

  // 🔥 wait until auth check completes
  if (loading) return <div>Loading...</div>;
  
  if (admin) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;