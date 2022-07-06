import React from "react";
import { Navigate } from "react-router-dom";
import { HOME, LOGIN } from "./paths";
import { useSelector } from "react-redux";

const PrivateRouteHome = ({ children }) => {
  const auth = useSelector((state) => state.session);
  if (!auth) {
    return <Navigate to={LOGIN} replace={true} />;
  }

  return children;
};

const PrivateRouteLogin = ({ children }) => {
  const auth = useSelector((state) => state.session);
  if (auth) {
    return <Navigate to={HOME} replace={true} />;
  }
  return children;
};

export { PrivateRouteHome, PrivateRouteLogin };
