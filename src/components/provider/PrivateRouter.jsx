import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../Loading";

const PrivateRouter = ({ children }) => {
  //   const location = useLocation();
  const { user, isLoading } = use(AuthContext);
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRouter;
