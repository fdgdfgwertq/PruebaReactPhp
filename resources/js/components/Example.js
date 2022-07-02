import React from "react";
import ReactDOM from "react-dom";
import { theme, GlobalStyles } from "./Styles";
import { ThemeProvider } from "styled-components";
import MainComponent from "./MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import useTittle from "./hooks/useTittle";

function Example() {
    useTittle("Home");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainComponent />}>
                    <Route index element={<></>} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById("root")) {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Example />
        </ThemeProvider>,
        document.getElementById("root")
    );
}
