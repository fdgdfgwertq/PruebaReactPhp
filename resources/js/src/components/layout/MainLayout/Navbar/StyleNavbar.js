import styled from "styled-components";
import { motion } from "framer-motion";

const styleNavResize = ({movile}) => {
  if(movile) return `
    position : fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 85%;
    max-width: 425px;
  `;
}

const Nav = styled(motion.nav)`
  background-color: rgb(30 31 33);
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${(props) => styleNavResize(props.resize)}
  .HeaderNav {
    display: grid;
    padding: 15px;
    place-items: center center;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2rem;
    color: #f06a6a;
  }
  .ContainerCloseMenu {
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    button {
      cursor: pointer;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export {Nav};