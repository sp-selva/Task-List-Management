// import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouters = () => {
    // const [isLogin, setIsLogin] = useState(false)
  const auth = { token: true };
  return auth.token ? <Outlet/> : <Navigate to="/" />;
};
export default PrivateRouters;
