import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation;
  if (loading) {
    <Loading />;
  }
  if (user) {
    return children;
  }

  return (
    <Navigate to={"/sign-up"} state={{ from: location }} replace:true></Navigate>
  );
};

export default PrivateRouter;
