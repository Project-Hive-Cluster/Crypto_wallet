import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Apps/Hook/useAuth";

const RequireAuth = ({ }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // https://dev.to/ebereplenty/react-authentication-protecting-and-accessing-routes-endpoints-96h
  return (
    auth.accessToken ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;