import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axiosClient";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  async function getClient() {
    const tokenValidate = localStorage.getItem("@TOKEN");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;

    try {
      const response = await api.get("/clients");

      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  }

  useEffect(() => {
    getClient();
  }, []);

  const NewLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENCLIENT", response.data.token);
      const { token, client: clientResponse } = response.data;
      setClient(clientResponse);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login relizado com sucesso!");

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error("Usuário não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        NewLogin,
        client,
        setClient,
        newLoading,
        setNewLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};