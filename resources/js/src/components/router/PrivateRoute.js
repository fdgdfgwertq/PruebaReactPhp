import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useWebsocket from "../../hooks/useWebsocket";
import LoaderMain from "../common/LoaderMain";
import { HOME, LOGIN } from "./paths";

const PrivateRouteHome = ({ children }) => {
  const { state, message } = useAuth();
  const { connect, messageConnect} = useWebsocket();

  if (state === 0 || connect === 0) return <LoaderMain/>;
  if (state === 1 || connect === 1) {
    console.log( message, messageConnect);
    return <Navigate to={LOGIN} replace={true} />;
  };

  return children;
};

const PrivateRouteLogin = ({ children }) => {
  const { state, message } = useAuth();

  if (state === 0) return <LoaderMain />;
  if (state === 2) return <Navigate to={HOME} replace={true} />;

  return children;
};

export { PrivateRouteHome, PrivateRouteLogin };
