import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = () => {
  const [auth] = useAuth();
  const location = useLocation();
  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default RequireAuth;
