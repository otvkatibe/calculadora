import React, { useState } from "react";

const Formulario = ({ onCalcular }) => {
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalcular({
            dia: parseInt(dia, 10),
            mes: parseInt(mes, 10),
            ano: parseInt(ano, 10),
        });
    };

    const handleChange = (e, setter) => {
        const value = e.target.value;
        
        if (/^\d*$/.test(value)) {
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
                    onChange={(e) => handleChange(e, setDia)} 
                    required 
                    placeholder="Digite o dia" 
                />
            </div>
            <div>
                <label>Mês</label>
                <input 
                    type='text' 
                    value={mes} 
                    onChange={(e) => handleChange(e, setMes)} 
                    required 
                    placeholder="Digite o mês" 
                />
            </div>
            <div>
                <label>Ano</label>
                <input 
                    type='text' 
                    value={ano} 
                    onChange={(e) => handleChange(e, setAno)} 
                    required 
                    placeholder="Digite o ano" 
                />
            </div>
            <button type="submit">↓</button>
        </form>
    );
};

export default Formulario;
