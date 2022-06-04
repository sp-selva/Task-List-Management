import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = {
    loggedIn: true
  };
  return user && user.loggedIn;
};

export const PrivateRouter = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
