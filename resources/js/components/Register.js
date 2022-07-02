import React, { useState } from "react";
import MainComponent from "../components/MainComponent";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonPage from "../components/ButtonPage";
import useTittle from "./hooks/useTittle";

const ContainerRegister = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: center;
`;

const RegisterStyle = styled(motion.div)`
    width: 405px;
    box-shadow: rgb(0 0 0 / 58%) 0px 2px 18px 0px;
    background-color: rgb(237 76 120);
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 5px;
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
`;

const DataDefault = {
    id_tipo_usuario: 2,
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    usuario: "",
    correo: "",
    password: "",
    confirmPassword: "",
};

const Register = () => {
    useTittle("Register");
    const [dataForm, setDataForm] = useState(DataDefault);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let siteUrl = window.location.origin;
        fetch(`${siteUrl}/api/usuario/`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(dataForm),
        }).then((res) => {
            if (res.ok) {
                res.json().then((res) => console.log(res));
            } else {
                console.log("error");
            }
        });
    };

    return (
        <ContainerRegister>
            <RegisterStyle
                animate={{ y: [100, 0] }}
                transition={{ duration: 0.5 }}
            >
                <div className="ContainerImage">
                    <img
                        src="/img/LogoRegister.svg"
                        alt="registro"
                        height="90px"
                        width="90px"
                    />
                </div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="primer_nombre">
                        <span>Primer Nombre</span>
                        <input
                            type="text"
                            name="primer_nombre"
                            id="primer_nombre"
                            placeholder="Andres"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="segundo_nombre">
                        <span>Segundo Nombre</span>
                        <input
                            type="text"
                            name="segundo_nombre"
                            id="segundo_nombre"
                            autoComplete="off"
                            placeholder="Felipe"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="primer_apellido">
                        <span>Primer Apellido</span>
                        <input
                            type="text"
                            name="primer_apellido"
                            id="primer_apellido"
                            autoComplete="off"
                            placeholder="Trujillo"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="segundo_apellido">
                        <span>Segundo Apellido</span>
                        <input
                            type="text"
                            name="segundo_apellido"
                            id="segundo_apellido"
                            autoComplete="off"
                            placeholder="Lopez"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="usuario">
                        <span>Usuario</span>
                        <input
                            type="text"
                            name="usuario"
                            id="usuario"
                            autoComplete="off"
                            placeholder="Andres_Felipe"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="correo">
                        <span>Email</span>
                        <input
                            type="email"
                            name="correo"
                            id="correo"
                            autoComplete="off"
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
                            placeholder="Minimo 8 caracteres"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="confirmPassword">
                        <span>Confirm Password</span>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Minimo 8 caracteres"
                            onChange={handleChange}
                        />
                    </label>
                    <ButtonPage type="submit" colorButton="white">
                        CREATE ACCOUNT
                    </ButtonPage>
                </form>
            </RegisterStyle>
        </ContainerRegister>
    );
};

export default Register;
