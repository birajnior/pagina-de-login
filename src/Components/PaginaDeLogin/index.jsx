import "./Style.css";
import Titulo from "../Titulo";
import Subtitulo from "../Subtitulo";
import CampoDeDigitacao from "../CampoDeDigitacao";
import Botao from "../Botao";
import { useState } from "react";
import Texto from "../Texto";
import RedesSociais from "../RedesSociais";
import Links from "../Links";

const PaginaDeLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email " + email);
    console.log("senh " + senha);
  };

  const Checkbox = () => {
    return (
      <>
        <div className="form__campo-checkbox">
          <input type="checkbox" id="lembrar" />
          <label htmlFor="lembrar" />
        </div>
        <p className="form__opcoes-texto">Lembrar-me</p>
      </>
    );
  };

  return (
    <div className="container-login">
      <picture>
        <source media="(max-width: 767px)" srcSet="/img/imagem-login-P.png" />
        <source media="(max-width: 1199px)" srcSet="/img/imagem-login-M.png" />
        <img
          src="/img/imagem-login.png"
          alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
        />
      </picture>
      <section>
        <form onSubmit={handleSubmit}>
          <Titulo>Login</Titulo>
          <Subtitulo>Boas-vindas! Faça seu login.</Subtitulo>
          <CampoDeDigitacao
            label="E-mail ou usuário"
            type="email"
            placeholder="Digite seu e-mail ou usuário"
            value={email}
            setValor={setEmail}
          />
          <CampoDeDigitacao
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            setValor={setSenha}
          />
          <fieldset className="form__opcoes">
            <Checkbox />
            <p>
              <a href="#" aria-label="Recuperar senha esquecida">
                Esqueci a senha
              </a>
            </p>
          </fieldset>
          <Botao type="submit">Login</Botao>
        </form>
        <div className="container-links">
          <Texto classe="container-links__titulo">
            ou entre com outras contas
          </Texto>
          <ul>
            <RedesSociais link="http://www.github.com" nome="Github" />
            <RedesSociais link="accounts.google.com" nome="Google" />
          </ul>
          <Texto classe="container-links__texto">Ainda não tem conta?</Texto>
          <Links>Crie seu cadastro!</Links>
        </div>
      </section>
    </div>
  );
};

export default PaginaDeLogin;
