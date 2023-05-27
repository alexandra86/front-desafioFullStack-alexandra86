import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHomePage } from "./style";

export const HomePage = () => {
  const { client, newLoading, setClient } = useContext(AuthContext);
  const navigate = useNavigate();

  if (newLoading) {
    return null;
  }

  const goLoginClick = () => {
    navigate("/");
    setClient(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };

  return (
    <StyledHomePage>
      <header className="headerHome">
        <img src="" alt="logo da Kenzie Hub" className="logoKenziHub" />
        <button className="btComeBackLogin" onClick={goLoginClick}>
          Sair
        </button>
      </header>

      <div className="areaUser">
        <h2 className="areaWelcome">Olá, {client.name} </h2>
        <p className="course">{client.gender}</p>
      </div>

      <div className="areaInformation">
        <div className="areaTechnology">
          <h3 className="titleTechnology">Tecnologias</h3>
          <button type="button" className="btOpenModal">
            +
          </button>
        </div>
        {/* <ul className="ulCardTech">
          {constumer.map((elem) => (
            <CardContact key={elem.id} elem={elem} />
          ))}
        </ul> */}
      </div>
    </StyledHomePage>
  );
};
