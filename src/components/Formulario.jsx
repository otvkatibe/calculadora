import React, { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({ onCalcular }) => {
  const [formData, setFormData] = useState({
    dia: "",
    mes: "",
    ano: ""
  });
  const [erros, setErros] = useState({
    dia: "",
    mes: "",
    ano: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novosErros = {};
    if (!formData.dia) novosErros.dia = "Campo obrigatório";
    if (!formData.mes) novosErros.mes = "Campo obrigatório";
    if (!formData.ano) novosErros.ano = "Campo obrigatório";
    
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    onCalcular({
      dia: parseInt(formData.dia, 10),
      mes: parseInt(formData.mes, 10),
      ano: parseInt(formData.ano, 10),
    });
  };

  const handleChange = (e, campo, maxLength) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= maxLength) {
      setFormData(prev => ({ ...prev, [campo]: value }));
      setErros(prev => ({ ...prev, [campo]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label className={erros.dia ? "label-invalido" : ""}>Dia</label>
        <input
          type="text"
          value={formData.dia}
          onChange={(e) => handleChange(e, "dia", 2)}
          placeholder="DD"
          maxLength={2}
          className={erros.dia ? "input-invalido" : ""}
        />
        {erros.dia && <span className="error-message">{erros.dia}</span>}
      </div>
      <div className="input-group">
        <label className={erros.mes ? "label-invalido" : ""}>Mês</label>
        <input
          type="text"
          value={formData.mes}
          onChange={(e) => handleChange(e, "mes", 2)}
          placeholder="MM"
          maxLength={2}
          className={erros.mes ? "input-invalido" : ""}
        />
        {erros.mes && <span className="error-message">{erros.mes}</span>}
      </div>
      <div className="input-group">
        <label className={erros.ano ? "label-invalido" : ""}>Ano</label>
        <input
          type="text"
          value={formData.ano}
          onChange={(e) => handleChange(e, "ano", 4)}
          placeholder="YYYY"
          maxLength={4}
          className={erros.ano ? "input-invalido" : ""}
        />
        {erros.ano && <span className="error-message">{erros.ano}</span>}
      </div>
      <button type="submit" className="submit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </button>
    </form>
  );
};

Formulario.propTypes = {
  onCalcular: PropTypes.func.isRequired
};

export default Formulario;