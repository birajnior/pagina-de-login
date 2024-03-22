import "./Style.css";

const Links = ({ children }) => {
  return (
    <a href="#" className="container-links__link">
      {children}
    </a>
  );
};

export default Links;
