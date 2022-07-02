import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonPage from "../components/ButtonPage";
import useTittle from "./hooks/useTittle";

const ContainerLogin = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: center;
`;

const LoginStyle = styled(motion.div)`
    background-color: rgb(42 59 113);
    box-shadow: rgb(0 0 0 / 58%) 0px 2px 18px 0px;
    .PrincipalContent {
        width: 405px;
        padding: 35px 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        border-radius: 5px;
        position: relative;
        z-index: 1;
    }
    .ContainerImage {
        display: grid;
        place-items: center center;
        padding: 10px;
    }
    h2 {
        font-size: 3rem;
        font-family: "HelloMozza";
        color: white;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: white;
        label {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        input {
            cursor: text;
            padding: 10px;
            border-bottom: 1px solid white;
        }
        input::placeholder {
            color: #ffffffa6;
        }
        span {
            display: block;
            font-weight: 600;
        }
        button {
            margin-top: 10px;
            align-self: center;
            width: max-content;
        }
    }
    .ContainerWhiteBackground {
        height: 150px;
        display: flex;
        align-items: flex-end;
        box-sizing: content-box;
        position: relative;
        padding: 30px;
        &::before {
            content: "";
            inset: 0 0 0 0;
            position: absolute;
            z-index: 1;
            background-color: white;
            clip-path: polygon(0 0, 100% 55%, 100% 100%, 0% 100%);
        }
        p {
            position: relative;
            z-index: 2;
            color: rgb(42 59 113);
            font-weight: 700;
        }
    }
`;

const DataDefault = {
    email: "",
    password: "",
};

const Login = () => {
    useTittle("Login");
    const [dataForm, setDataForm] = useState(DataDefault);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let siteUrl = window.location.origin;
        fetch(`${siteUrl}/api/usuario`).then((res) => {
            if (res.ok) {
                res.json().then((res) => console.log(res));
            } else {
                console.log("error");
            }
        });
    };

    return (
        <ContainerLogin>
            <LoginStyle
                animate={{ y: [100, 0] }}
                transition={{ duration: 0.5 }}
            >
                <div className="PrincipalContent">
                    <div className="ContainerImage">
                        <img
                            src="/img/LogoLogin.svg"
                            alt="login"
                            height="90px"
                            width="90px"
                        />
                    </div>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Example@gmail.com"
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Tu clave"
                                onChange={handleChange}
                            />
                        </label>
                        <ButtonPage type="submit" colorButton="white">
                            LOGIN
                        </ButtonPage>
                    </form>
                </div>
                <div className="ContainerWhiteBackground">
                    <p>Terms & Conditions</p>
                </div>
            </LoginStyle>
        </ContainerLogin>
    );
};

export default Login;
