import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonStyle = styled(motion.button)`
  border: 2px solid;
  padding: 10px 20px;
  color: ${(props) => props['color-button']};
  background-color: transparent;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 700;
`;

const ButtonPage = ({ children, colorButton }) => {
  return (
    <ButtonStyle
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      color-button={colorButton}
    >
      {children}
    </ButtonStyle>
  );
};

export default ButtonPage;
