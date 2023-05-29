import { createContext, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { api } from "../services/axiosClient";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { client, getClient } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [selectContact, setSelectContact] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleEditModal = () => {
    setIsEditOpen(!modalIsEditOpen);
  };

  const RegisterContact = async (data) => {
    try {
      setLoading(true);

      await api.post("/contacts", data);

      getClient();

      setIsOpen(false);

      toast.success("Sucesso! Contato Cadastrado!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const removeContact = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/contacts/${id}`);
      getClient();

      toast.info("Contato removido com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const editContact = async (data) => {
    console.log(data);
    try {
      setLoading(true);

      await api.patch(`/contacts/${data.id}`, data);
      getClient();

      setIsEditOpen(false);
      toast.success("Contato alterado com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        client,
        modalIsOpen,
        setIsOpen,
        modalIsEditOpen,
        setIsEditOpen,
        selectContact,
        setSelectContact,
        loading,
        setLoading,
        RegisterContact,
        handleModal,
        handleEditModal,
        removeContact,
        editContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
