import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledRegisterPage } from "./style";
import { registerSchema } from "./registerSchema";
import logo from "../../img/logo_costumer.svg";
import { Loading } from "../../components/Loading";
import InputMask from "react-input-mask";

export const RegisterPage = () => {
  const { loading, NewRegister, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      image: "",
      gender: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      const information = { ...data };
      await NewRegister(information);
      reset();
    }, 1000);
  };
  return (
    <StyledRegisterPage>
      <section className="secApresentation">
        <img src={logo} alt="imagem de costumer contact" className="logo" />
      </section>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <h1 className="titleRegister">Cadastro</h1>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Retornar para o login
          </button>
        </div>
        <form
          className="formRegister"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <label htmlFor="name" className="lbRegister">
            Nome
          </label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            className="iptRegister"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}
          <label htmlFor="email" className="lbRegister">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            className="iptRegister"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbRegister">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            className="iptRegister"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <label htmlFor="phone" className="lbRegister">
            Telefone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            placeholder="Digite aqui seu telefone"
            className="iptRegister"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <label htmlFor="image" className="lbRegister">
            Imagem
          </label>
          <input
            type="url"
            placeholder="Insira o link da sua imagem"
            className="iptRegister"
            {...register("image")}
          />
          {errors.image && <p className="areaError">{errors.image.message}</p>}

          <label htmlFor="gender" className="lbRegister">
            Gênero
          </label>
          <select
            name="gender"
            id="gender"
            className="iptRegister"
            {...register("gender")}
          >
            <option value="">Selecione</option>
            <option value="male">masculino</option>
            <option value="female">feminino</option>
            <option value="no binary">não binário</option>
            <option value="I prefer not to say">prefiro não dizer</option>
          </select>
          {errors.gender && (
            <p className="areaError">{errors.gender.message}</p>
          )}
          <button type="submit" className="btRegister" disabled={loading}>
            {loading ? <Loading /> : "Cadastrar"}
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
};
