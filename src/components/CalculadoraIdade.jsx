import React, { useState } from "react";
import { calcularIdade, validarData } from "../Utils/Calculo.js";

function CalculadoraIdade() {
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const handleCalcular = (data) => {
    const validacao = validarData(data);

    if (!validacao.valido) {
      setErro(validacao.mensagem);
      setResultado(null);
      return;
    }

    setErro("");
    const idade = calcularIdade(data);
    setResultado(idade);
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <Formulario onCalcular={handleCalcular} />
      <Erro mensagem={erro} />
      {resultado && <Resultado {...resultado} />}
    </div>
  );
}

const Resultado = ({ anos, meses, dias }) => (
  <div>
    <h2>Resultado:</h2>
    <p>{anos} anos</p>
    <p>{meses} meses</p>
    <p>{dias} dias</p>
  </div>
);

const Formulario = ({ onCalcular }) => {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalcular({ dia: parseInt(dia), mes: parseInt(mes), ano: parseInt(ano) });
  };

  return (
    <form onSubmit={handleSubmit}>
  <div>
    <label>Dia</label>
    <input type="number" placeholder="1-31" value={dia} onChange={(e) => setDia(e.target.value)} required />
  </div>
  <div>
    <label>Mês</label>
    <input type="number" placeholder="1-12" value={mes} onChange={(e) => setMes(e.target.value)} required />
  </div>
  <div>
    <label>Ano</label>
    <input type="number" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} required />
  </div>
    <button type="submit">Calcular</button>
  </form>
  );
};

const Erro = ({ mensagem }) => (mensagem ? <div style={{ color: "red" }}>{mensagem}</div> : null);

export default CalculadoraIdade;
