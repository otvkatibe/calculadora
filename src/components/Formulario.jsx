import React, { useState } from "react";

const Formulario = ({ onCalcular }) => {
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalcular ({
            dia: parseInt(dia, 10),
            mes: parseInt(mes, 10),
            ano: parseInt(ano, 10),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dia</label>
                <input type = 'number' placeholder = "" value = {dia} onChange = {(e) => setDia(e.target.value)} required/>
            </div>
            <div>
                <label>Mês</label>
                <input type = 'number' placeholder = "" value = {mes} onChange = {(e) => setMes(e.target.value)} required/>
            </div>
            <div>
                <label>Ano</label>
                <input type = 'number' placeholder = "" value = {ano} onChange = {(e) => setAno(e.target.value)} required/>
            </div>
            <button type = "submit" >Calcular</button>
        </form>
    );

};

export default Formulario;