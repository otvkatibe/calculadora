import React, { useState } from "react";

const Formulario = ({ onCalcular }) => {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica de campos preenchidos
    if (!dia || !mes || !ano) {
      onCalcular({ dia: NaN, mes: NaN, ano: NaN });
      return;
    }

    onCalcular({
      dia: parseInt(dia, 10),
      mes: parseInt(mes, 10),
      ano: parseInt(ano, 10),
    });
  };

  const handleChange = (e, setter, maxLength) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= maxLength) {
      setter(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label>Dia</label>
        <input
          type="text"
          value={dia}
          onChange={(e) => handleChange(e, setDia, 2)}
          placeholder="DD"
          maxLength={2}
        />
      </div>
      <div className="input-group">
        <label>Mês</label>
        <input
          type="text"
          value={mes}
          onChange={(e) => handleChange(e, setMes, 2)}
          placeholder="MM"
          maxLength={2}
        />
      </div>
      <div className="input-group">
        <label>Ano</label>
        <input
          type="text"
          value={ano}
          onChange={(e) => handleChange(e, setAno, 4)}
          placeholder="YYYY"
          maxLength={4}
        />
      </div>
      <button type="submit" className="submit-btn">↓</button>
    </form>
  );
};

export default Formulario;
