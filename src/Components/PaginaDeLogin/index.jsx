import "./Style.css";
import Titulo from "../Titulo";
import Subtitulo from "../Subtitulo";
import CampoDeDigitacao from "../CampoDeDigitacao";
import Botao from "../Botao";
import { useState } from "react";

const PaginaDeLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("email " + email);
    console.log("senh "+ senha);
  }

  return (
    <div className="container-login">
      <img
        src="/img/imagem-login.png"
        alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
      />
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
          <Botao type="submit">Login</Botao>
        </form>
      </section>
    </div>
  );
};

export default PaginaDeLogin;
