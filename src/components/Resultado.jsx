import React from "react";

const Resultado = ({ anos, meses, dias}) => (
    <div>
        <h2>Resultado:</h2>
        <p> {anos} anos</p>
        <p> {meses} meses</p>
        <p> {dias} dias</p>
    </div>
);

export default Resultado;