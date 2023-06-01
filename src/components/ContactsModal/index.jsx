import { useContext } from "react";
import { createPortal } from "react-dom";
import { ContactContext } from "../../contexts/ContactContext";
import { StyledContainerContactsModal } from "./style";
import moment from "moment";
import "moment/locale/pt-br";

export const ContactsModal = () => {
  const { handleContactsModal, client } = useContext(ContactContext);

  const registerDate = client.contacts.map((elem) => elem.registerDate);

  const currentDateTime = new Date(registerDate[0]);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");
  const formattedTime = moment(currentDateTime).format("HH:mm:ss");

  const modalContactsContent = (
    <StyledContainerContactsModal>
      <div className="modalContentContacts">
        <div className="headerModal">
          <h2 className="titleModal">Visulizar Contatos</h2>
          <button
            onClick={() => handleContactsModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <div className="handleListContacts">
          {client.contacts.map((contact) => (
            <div key={contact.id}>
              <h2>Nome: {contact.fullName}</h2>
              <p>E-mail: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>Gender: {contact.gender}</p>
              <h3>Register Date:</h3>
              <div>
                <p>Date: {formattedDate}</p>
                <p>Hour: {formattedTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledContainerContactsModal>
  );
  return createPortal(
    modalContactsContent,
    document.getElementById("modalContacts-root")
  );
};
