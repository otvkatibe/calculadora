import React, { useState } from "react";

const Formulario = ({ onCalcular }) => {
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dia.length === 2 && mes.length === 2 && ano.length === 4) {
            onCalcular({
                dia: parseInt(dia, 10),
                mes: parseInt(mes, 10),
                ano: parseInt(ano, 10),
            });
        } else {
            alert("Por favor, insira o formato correto: DD/MM/YYYY");
        }
    };

    const handleChange = (e, setter, maxLength) => {
        const value = e.target.value;

        if (/^\d*$/.test(value) && value.length <= maxLength) {
            setter(value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dia</label>
                <input
                    type='text'
                    value={dia}
                    onChange={(e) => handleChange(e, setDia, 2)}
                    required
                    placeholder="DD"
                    maxLength={2}
                />
            </div>
            <div>
                <label>Mês</label>
                <input
                    type='text'
                    value={mes}
                    onChange={(e) => handleChange(e, setMes, 2)}
                    required
                    placeholder="MM"
                    maxLength={2}
                />
            </div>
            <div>
                <label>Ano</label>
                <input
                    type='text'
                    value={ano}
                    onChange={(e) => handleChange(e, setAno, 4)}
                    required
                    placeholder="YYYY"
                    maxLength={4}
                />
            </div>
            <button type="submit">↓</button>
        </form>
    );
};

export default Formulario;
