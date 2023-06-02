import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logoHome from "../../img/LogoHome.png";
import { StyledProfilePage } from "./style";
import { useNavigate } from "react-router-dom";
import { EditClientModal } from "../../components/EditClientModal";
import { ContactContext } from "../../contexts/ContactContext";
import moment from "moment";
import "moment/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";

export const ProfilePage = () => {
  const { client, newLoading } = useContext(AuthContext);
  const { setSelectClient, modalIsClientOpen, handleClientModal } =
    useContext(ContactContext);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {client && (
        <StyledProfilePage>
          <header className="headerHome">
            <img
              src={logoHome}
              alt="logo da Kenzie Hub"
              className="logoKenziHub"
            />
            <button className="btComeBackHome" onClick={goToHome}>
              Home
            </button>
          </header>
          <img
            src={client.client.image}
            alt="Imagem do cliente"
            className="imageClientProfile"
          />

          <div className="areaClientProfile" key={client.client.id}>
            <h2 className="NameClientProfile">Nome: {client.client.name}</h2>
            <p className="clientProfile">E-mail: {client.client.email}</p>
            <p className="clientProfile">Phone: {client.client.phone}</p>
            <p className="clientProfile">Gender: {client.client.gender}</p>
            <h3 className="clientProfile">Register Date:</h3>
            <div className="areaDateHourProfile">
              <p className="clientProfile">
                Date:{" "}
                {moment(new Date(client.client.registerDate)).format(
                  "DD/MM/YYYY"
                )}
              </p>
              <p className="clientProfile">
                Hour:{" "}
                {moment(new Date(client.client.registerDate)).format(
                  "HH:mm:ss"
                )}
              </p>
            </div>
            <div className="areaButtonsProfile">
              <button
                className="btEditProfile"
                onClick={() => {
                  handleClientModal();
                  setSelectClient(client.client);
                }}
              >
                Editar
              </button>
              <button className="btDeleteProfile">Deletar</button>
            </div>
          </div>
          {modalIsClientOpen && <EditClientModal />}
        </StyledProfilePage>
      )}
    </>
  );
};
