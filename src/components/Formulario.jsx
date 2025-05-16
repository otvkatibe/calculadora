import { useState } from "react";

function Formulario({ onCalcular }) {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [tocado, setTocado] = useState({ dia: false, mes: false, ano: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dia || !mes || !ano) return;
    onCalcular({ dia: Number(dia), mes: Number(mes), ano: Number(ano) });
    setDia("");
    setMes("");
    setAno("");
    setTocado({ dia: false, mes: false, ano: false });
  };

  const handleBlur = (campo) => {
    setTocado((prev) => ({ ...prev, [campo]: true }));
  };

  const campoInvalido = (valor) => valor === "";

  return (
    <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
      <div className="input-group">
        <label htmlFor="dia" className={tocado.dia && campoInvalido(dia) ? "label-invalido" : ""}>
          Dia
        </label>
        <input
          id="dia"
          type="number"
          min="1"
          max="31"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          onBlur={() => handleBlur("dia")}
          placeholder="DD"
          className={tocado.dia && campoInvalido(dia) ? "input-invalido" : ""}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="mes" className={tocado.mes && campoInvalido(mes) ? "label-invalido" : ""}>
          Mês
        </label>
        <input
          id="mes"
          type="number"
          min="1"
          max="12"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          onBlur={() => handleBlur("mes")}
          placeholder="MM"
          className={tocado.mes && campoInvalido(mes) ? "input-invalido" : ""}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="ano" className={tocado.ano && campoInvalido(ano) ? "label-invalido" : ""}>
          Ano
        </label>
        <input
          id="ano"
          type="number"
          min="1"
          max={new Date().getFullYear()}
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          onBlur={() => handleBlur("ano")}
          placeholder="AAAA"
          className={tocado.ano && campoInvalido(ano) ? "input-invalido" : ""}
          required
        />
      </div>
      <button className="submit-btn" type="submit" aria-label="Calcular idade">
        Calcular
      </button>
    </form>
  );
}

export default Formulario;