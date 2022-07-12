import React from "react";
import { ImgAnimation, MainDiv } from "./StyleMainLayout";

const MainLoginLayout = ({ children }) => {
  return (
    <MainDiv>
      <div className="ContainerLeft">
        <ImgAnimation
          animate={{ scale: [0.7, 1] }}
          transition={{ duration: 0.5 }}
        >
          <img src="/img/vectores/ImgLogin.svg" alt="login" />
        </ImgAnimation>
      </div>
      <main className="ContainerRight">{children}</main>
    </MainDiv>
  );
};

export default MainLoginLayout;
