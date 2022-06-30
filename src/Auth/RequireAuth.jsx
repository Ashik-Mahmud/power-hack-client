import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = ({ children }) => {
  const { auth, loading } = useAuth();

  const location = useLocation();
  if (!loading) return;
  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
