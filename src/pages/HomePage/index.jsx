import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHomePage } from "./style";
import { CardContact } from "../../components/CardContact";
import logoHome from "../../img/LogoHome.png";
import { ContactContext } from "../../contexts/ContactContext";
import { RegisterContactModal } from "../../components/RegisterContactModal";
import { EditContactModal } from "../../components/EditContactModal";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const { client, newLoading } = useContext(AuthContext);
  const { modalIsOpen, handleModal, modalIsEditOpen } =
    useContext(ContactContext);

  const navigate = useNavigate();

  if (newLoading) {
    return null;
  }

  const goLoginClick = () => {
    navigate("/");
    client.client = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };
  return (
    <StyledHomePage>
      <header className="headerHome">
        <img src={logoHome} alt="logo da Kenzie Hub" className="logoKenziHub" />
        <button className="btComeBackLogin" onClick={goLoginClick}>
          Sair
        </button>
      </header>

      {client?.client && (
        <div className="areaUser">
          <h2 className="areaWelcome">Olá! &#128521;</h2>
          <p className="areaWelcome">{client.client.name}</p>
        </div>
      )}

      <div className="areaInformation">
        <div className="areaContact">
          <h3 className="titleContactHome">&#128242; Contatos</h3>
          <button
            type="button"
            className="btOpenModal"
            onClick={() => handleModal()}
          >
            +
          </button>
        </div>
        <ul className="ulCardContact">
          {client?.contacts.map((elem) => (
            <CardContact key={elem.id} elem={elem} />
          ))}
        </ul>
      </div>
      {modalIsOpen && <RegisterContactModal />}
      {modalIsEditOpen && <EditContactModal />}
    </StyledHomePage>
  );
};
