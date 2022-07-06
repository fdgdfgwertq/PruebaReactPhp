import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, LOGIN } from "./components/router/paths";
import {
  PrivateRouteHome,
  PrivateRouteLogin,
} from "./components/router/PrivateRoute";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME}
          element={
            <PrivateRouteHome>
              <div>inicio</div>
            </PrivateRouteHome>
          }
        />
        <Route
          path={LOGIN}
          element={
            <PrivateRouteLogin>
              <Login />
            </PrivateRouteLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
