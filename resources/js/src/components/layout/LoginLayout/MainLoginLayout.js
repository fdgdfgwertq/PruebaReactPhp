import React from "react";
import { H1Animation, MainDiv } from "./StyleMainLayout";

const MainLoginLayout = ({ children }) => {
  return (
    <MainDiv>
      <div className="ContainerLeft">
        <H1Animation animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
          Bienvenidos
          <br />a <span className="TextNuestraColor">Nuestra</span>
          <span className="TextAppColor"> App</span>
        </H1Animation>
      </div>
      <main className="ContainerRight">{children}</main>
    </MainDiv>
  );
};

export default MainLoginLayout;
