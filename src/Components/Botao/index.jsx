import "./Style.css";

// eslint-disable-next-line react/prop-types
const Botao = ({ type, children }) => {
  return (
    <button className="form__botao" type={type}>
      {children}
    </button>
  );
};

export default Botao;
