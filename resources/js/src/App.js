import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN } from "./components/router/paths";
import {
  PrivateRouteHome,
  PrivateRouteLogin,
} from "./components/router/PrivateRoute";
import useTittle from "./hooks/useTittle";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  useTittle("Cargando");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
