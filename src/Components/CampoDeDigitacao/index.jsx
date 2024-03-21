import "./Style.css";

// eslint-disable-next-line react/prop-types
const CampoDeDigitacao = ({ label, type, id, placeholder }) => {
  return (
    <>
      <div className="form__campo-digitacao">
        <label htmlFor="email">{label}</label>
        <input type={type} id={id} placeholder={placeholder} required />
      </div>
    </>
  );
};
export default CampoDeDigitacao;
