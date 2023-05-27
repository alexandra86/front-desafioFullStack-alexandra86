import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
// import { toast } from "react-toastify";
// import Modal from "react-modal";
// import { api } from "../services/axiosClient";
// import { useNavigate } from "react-router-dom";
// Modal.setAppElement("#root");

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { client } = useContext(AuthContext);

  // const { modalIsOpen, setIsOpen } = useState(false);

  // const [modalIsEditOpen, setIsEditOpen] = useState(false);

  // const [selectGender, setSelectGender] = useState(null);

  const [loading, setLoading] = useState(false);

  const costumer = client?.costumer;

  // const navigate = useNavigate();

  // const handleModal = () => {
  //   setIsOpen(!modalIsOpen);
  // };

  // const handleEditModal = () => {
  //   setIsEditOpen(!modalIsEditOpen);
  // };

  // async function EditContact(data) {
  //   try {
  //     setLoading(true);

  //     await api.patch(`/contacts/${data.id}`, data);
  //     getClient();

  //     setIsEditOpen(false);
  //     toast.success("Informações alteradas com sucesso!");
  //     navigate("/home");
  //   } catch (error) {
  //     toast.error("Algo não está certo!");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // const removeContact = async (id) => {
  //   try {
  //     setLoading(true);

  //     await api.delete(`/contacts/${id}`);
  //     getClient();

  //     toast.info("Contato removido com sucesso!");
  //   } catch (error) {
  //     toast.error("Algo não está certo!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <ContactContext.Provider
      value={{
        // modalIsEditOpen,
        // setIsEditOpen,
        // selectGender,
        // setSelectGender,
        loading,
        setLoading,
        costumer,
        // handleModal,
        // handleEditModal,
        // removeContact,
        // EditContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
