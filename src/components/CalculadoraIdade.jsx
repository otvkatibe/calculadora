import React, { useState } from "react"
import { calcularIdade } from "./utils/calcularIdade.js"
import { validarData } from "./utils/validarData.js"
import Erro from "./Erro"
import Formulario from "./Formulario"
import Resultado from "./Resultado"

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
    setResultado(calcularIdade(data))
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <Formulario onCalcular = {handleCalcular} />
      <Erro mensagem = {erro} />
      {resultado && <Resultado {...resultado} />}
    </div>
  );

}

export default CalculadoraIdade;
