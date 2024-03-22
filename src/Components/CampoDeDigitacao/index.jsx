import "./Style.css";

// eslint-disable-next-line react/prop-types
const CampoDeDigitacao = ({
  label,
  type,
  placeholder,
  value,
  setValor,
}) => {
  return (
    <>
      <div className="form__campo-digitacao">
        <label htmlFor={type}>{label}</label>
        <input
          type={type}
          id={type}
          placeholder={placeholder}
          value={value}
          onChange={(evento) => setValor(evento.target.value)}
          required
        />
      </div>
    </>
  );
};
export default CampoDeDigitacao;
