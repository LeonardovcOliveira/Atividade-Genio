import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  }

body{
background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
no-repeat center ;
background-size: cover;
}

header{
display:flex;
justify-content: center;
}

main{
display:flex;
justify-content: center;
}

section{
      display:flex;
      flex-direction:column;
      align-items:center;
}

div{
        
        bottom:55px;
        button{
          border:none;
          border-radius:50px;
          background-color:#007BFF;
          color:#FFFFFF;
          font-family: "Sevillana", serif;
          font-size:2.5rem;
          font-weight:400;
          width:20.8vw;
        }
}

`;
const Titulo = styled.h1`
  color: white;
  font-family: "Sevillana", serif;
  font-size: 2.5rem;
  font-weight: 400;
`;

export default function App() {
  //useState
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <>
      <header>
        <GlobalStyle />{" "}
        <Titulo>
          "Liberte a magia da programação com a lâmpada de Alladim!"
        </Titulo>
      </header>
      <main>
        <section>
          <img
            src={
              lampada
                ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
                : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
            }
            alt="Lâmpada"
          />
          <div>
            <button onClick={trocarLampada}>Clique Aqui</button>
          </div>
        </section>
      </main>
    </>
  );
}
