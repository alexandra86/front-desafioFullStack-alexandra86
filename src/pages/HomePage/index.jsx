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
import { ContactsModal } from "../../components/ContactsModal";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const { client, newLoading } = useContext(AuthContext);
  const {
    modalIsOpen,
    handleModal,
    modalIsEditOpen,
    modalIsContactsOpen,
    handleContactsModal,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    client.client = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };

  const goProfilePage = () => {
    navigate("/profile");
  };
  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {client && (
        <StyledHomePage>
          <header className="headerHome">
            <img
              src={logoHome}
              alt="logo da Kenzie Hub"
              className="logoKenziHub"
            />
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Sair
            </button>
          </header>

          <div className="areaUser">
            <div className="hello">
              <h2 className="areaWelcome">Olá! &#128521;</h2>
              <p className="areaWelcome">{client.client.name}</p>
            </div>
            <div className="areaImageClient">
              <img
                src={client.client.image}
                alt="Imagem do cliente"
                className="imageClient"
              />
              <button className="btViewProfile" onClick={goProfilePage}>
                {" "}
                Ver perfil
              </button>
            </div>
          </div>

          <div className="areaInformation">
            <div className="areaContact">
              <button
                className="bTContactHome"
                onClick={() => handleContactsModal()}
              >
                &#128242; Contatos
              </button>
              <button
                type="button"
                className="btOpenModal"
                onClick={() => handleModal()}
              >
                +
              </button>
            </div>
            {client.contacts && client.contacts.length > 0 ? (
              <ul className="ulCardContact">
                {client.contacts.map((elem) => (
                  <CardContact key={elem.id} elem={elem} />
                ))}
              </ul>
            ) : (
              <div className="areaNoContact">
                <h1 className="freseNoContact">
                  Você não ainda possui contatos cadastrados.
                </h1>
              </div>
            )}
          </div>
          {modalIsOpen && <RegisterContactModal />}
          {modalIsEditOpen && <EditContactModal />}
          {modalIsContactsOpen && <ContactsModal />}
        </StyledHomePage>
      )}
    </>
  );
};
