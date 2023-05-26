import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledLoginPage } from "./style";
import logo from "../../img/logo_costumer.svg";
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
  const { loading, NewLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const goRegisterClick = () => {
    navigate("/register");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    await NewLogin(data);

    if (localStorage.getItem("@TOKEN")) {
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 5000);
      reset();
    }
  };
  return (
    <StyledLoginPage>
      <section className="secLogin">
        <h1 className="titleLogin">Login</h1>
        <form className="formLogin" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="email" className="lbLogin">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            className="iptLogin"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbLogin">
            Password
          </label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            className="iptLogin"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <button type="submit" className="btLogar" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
        <p className="messageCreateRegister">Não possui conta?</p>
        <button className="btGoToRegister" onClick={goRegisterClick}>
          Cadastre-se
        </button>
      </section>
      <section className="secApresentation">
        <img src={logo} alt="imagem de costumer contact" />
      </section>
    </StyledLoginPage>
  );
};
