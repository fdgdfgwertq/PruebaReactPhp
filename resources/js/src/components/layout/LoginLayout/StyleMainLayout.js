import styled from "styled-components";
import { motion } from "framer-motion";

const MainDiv = styled.div`
  background-image: url("/img/BackgroungLogin.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  & > * {
    position: relative;
    z-index: 3;
  }
  &::before {
    content: "";
    background-color: #00000082;
    position: absolute;
    z-index: 2;
    inset: 0;
  }
  .ContainerLeft {
    display: none;
  }
  .ContainerRight {
    min-height: 100vh;
  }
  @media (min-width: 768px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .ContainerLeft {
      display: none;
      display: grid;
      place-items: center center;
    }
    .ContainerRight {
      height: 100vh;
      overflow-y: auto;
    }
  }
  @media (min-width: 1080px) {
  }
`;

const H1Animation = styled(motion.h1)`
  font-family: "Rubik", sans-serif;
  color: white;
  .TextNuestraColor {
    color: #02bd04;
  }
  .TextAppColor {
    color: #3299bd;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1080px) {
    font-size: 2.5rem;
  }
`;

export { H1Animation, MainDiv };
