import PropTypes from "prop-types";

const Erro = ({ mensagem }) => (
  mensagem ? <div className="error-message">{mensagem}</div> : null
);

Erro.propTypes = {
  mensagem: PropTypes.string
};

export default Erro;