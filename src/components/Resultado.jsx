import React from "react";
import PropTypes from "prop-types";

const Resultado = ({ anos, meses, dias }) => (
  <div className="resultado-container">
    <div className="resultado-item">
      <span>{anos}</span> {anos === 1 ? "ano" : "anos"}
    </div>
    <div className="resultado-item">
      <span>{meses}</span> {meses === 1 ? "mês" : "meses"}
    </div>
    <div className="resultado-item">
      <span>{dias}</span> {dias === 1 ? "dia" : "dias"}
    </div>
  </div>
);

Resultado.propTypes = {
  anos: PropTypes.number.isRequired,
  meses: PropTypes.number.isRequired,
  dias: PropTypes.number.isRequired
};

export default Resultado;