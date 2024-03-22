const RedesSociais = ({ link, nome }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferer">
        <img src={`/img/${nome}.svg`} alt={`Ícone do ${nome}`} />
        {nome}
      </a>
    </li>
  );
};

export default RedesSociais;
