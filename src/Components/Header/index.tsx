import React, { useEffect, Suspense } from "react";
import * as S from "./styles";
import ImagePrincipal from "../Assets/Images/principal-header.png";
import BorderTop from "../Assets/Images/border-top.png";

export default function Header() {
  return (
    <>
      <S.Container>
        <div className="buttons-header">
          <ul>
            <li>Sobre</li>
            <li>Conhecimentos</li>
            <li>Projetos</li>
            <li>Por que contratar meus serviços</li>
            <li>Fale Comigo</li>
            <li></li>
          </ul>
        </div>
        <div className="info-header container">
          <div>
            <h4>Olá! Eu sou a Gabriela</h4>
            <p>Desenvolvedora web Front-end</p>
          </div>
          <div>
            <img src={ImagePrincipal} alt="computer" />
          </div>
        </div>
      </S.Container>
      <img className="border-image" src={BorderTop} alt="border" />
    </>
  );
}
